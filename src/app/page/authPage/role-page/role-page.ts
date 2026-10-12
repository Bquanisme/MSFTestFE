import { Component, inject, signal } from '@angular/core';
import { RoleService } from '../../../service/role/role-service';
import { RoleItem, UserItem } from '../../../typescript/home';
import { catchError, debounceTime, delay, distinctUntilChanged, finalize, map, of, switchMap, tap } from 'rxjs';
import { Loading } from '../../../components/loading/loading';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user/user-service';
import { Toast } from '../../../components/toast/toast';

@Component({
  selector: 'app-role-page',
  imports: [MatIcon, ReactiveFormsModule, Toast],
  templateUrl: './role-page.html',
  styleUrl: './role-page.css',
})
export class RolePage {
  // call service + formBuilder
  private RoleService = inject(RoleService)
  private UserService = inject(UserService)
  private fb = inject(FormBuilder)

  isLoading = false

  showToastSuccess = signal(false)
  showToastDelete = signal(false)
  showToastError = signal(false)


  errorText = signal<string | undefined>("")
  

  // DATA ROLE
  getRoleUser = signal<RoleItem[]>([])
  // getRoleUser: RoleItem[] = []
  users = signal<UserItem[]>([]);

  // MỞ ACTION
  openActionId = signal<string | null>(null);
  openUp = signal(false);

  // ĐẶT BOOLEAN CHECKBOX
  isDefault = false;
  isPublic = false;

  // MỞ MODAL EDIT
  isModalOpenEdit = signal(false)
  selectedRole = signal<RoleItem | null>(null);

  // TẠO SEARCH CONTROL + DATA SAU SEARCH
  searchControl = this.fb.nonNullable.control('');
  filteredRoles = signal<RoleItem[]>([]);

  // MỞ MODA DELETE + CHỌN ROLE DELETE
  isModalOpenDelete = signal(false)
  selectedRoleDelete = signal<RoleItem | null>(null);

  // TẠO MỚI
  isModalOpenNew = signal(false)







  handleOpenToast() {
    this.showToastSuccess.set(true)

    setTimeout(() => {
      this.showToastSuccess.set(false);
    }, 2000);
  }

  handleCloseToast() {
    this.showToastSuccess.set(false)
  }




  handleOpenToastDelete() {
    this.showToastDelete.set(true)

    setTimeout(() => {
      this.showToastDelete.set(false);
    }, 2000);
  }

  handleCloseToastDelete() {
    this.showToastDelete.set(false)
  }



  //ERR
  handleOpenToastError() {
    this.showToastError.set(true)

    setTimeout(() => {
      this.showToastError.set(false);
    }, 2000);
  }

  handleCloseToastError() {
    this.showToastError.set(false)
  }





  // OPEN MODAL TẠO MỚI
  handleOpenModalNew(): void {
    this.validateForm.reset({
      roleName: '',
      default: false,
      public: false
    });

    this.isModalOpenNew.set(true);
    this.submitted = false;
    this.selectedRole.set(null);
    this.selectedRoleDelete.set(null);
  }

  // ĐÓNG MODAL TẠO MỚI
  handleCloseModalNew() {
    this.validateForm.reset({
      roleName: '',
      default: false,
      public: false
    });
    
    this.isModalOpenNew.set(false)
  }



  
  // MỞ MODAL DELETE
  handleOpenModalDelete(item: RoleItem): void {
    this.closeActionMenu()
    this.selectedRoleDelete.set(item);

    this.isModalOpenDelete.set(true);
    this.openActionId.set(null);
    this.submitted = false;
  }

  // ĐÓNG MODAL DELETE
  handleCloseModalDelete() {
    this.isModalOpenDelete.set(false)
  }





  //Mở modal edit, lưu data sau patch
  handleOpenModalEdit(item: RoleItem): void {
    this.closeActionMenu()
    this.selectedRole.set(item);

    
    this.validateForm.reset({
      roleName: item.name,
      default: item.status?.includes('default') ?? false,
      public: item.status?.includes('public') ?? false
    });

    this.isModalOpenEdit.set(true);
    this.openActionId.set(null);
    this.submitted = false;
  }

  // Đóng modal
  handleCloseModalEdit(): void {
    this.isModalOpenEdit.set(false);
    this.selectedRole.set(null);

    this.validateForm.reset({
      roleName: '',
      default: false,
      public: false
    });

    this.submitted = false;
  }




  

  // check menu scroll trên hay dưới
  toggleAction(id: string, event: MouseEvent): void {

    const button = event.currentTarget as HTMLElement;

    const rect = button.getBoundingClientRect();

    const menuHeight = 230;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.openUp.set(
        spaceBelow < menuHeight && spaceAbove > spaceBelow
    );


    // Mở menu dựa id
    this.openActionId.update(current =>
      current === id ? null : id
    );
  }


  closeActionMenu(): void {
    this.openActionId.set(null);
    this.openUp.set(false);
  }

  
  
  // get Data list role
  getRoles(): void {
    this.isLoading = true;

    this.RoleService.getRole()
      .pipe(
        tap(data => console.log(data)),
        catchError(error => {
          console.error(error);
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(role => {
        this.getRoleUser.set(role);
        this.filteredRoles.set(role);
      });
  }

  //Get Data Users
  getUsers(): void {
    this.UserService.getUser().subscribe({
      next: users => {
        this.users.set(users);
      },
      error: error => {
        console.error(error);
      }
    });
  }


  // DELETE DATA
  deleteRole(id: string | undefined): void {
    if (!id) {
      return;
    }
    this.RoleService.deleteRole(id).subscribe({
      next: () => {
        console.log('Delete role successfully');

        // Load lại danh sách
        this.getRoles();
      },
      error: error => {
        console.error('Delete role failed:', error);
      }
    });
  }


  // get Data after search => filterRoles
  searchRole(): void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap(keyword => {
        const search = keyword.trim().toLowerCase();

        return of(
          this.getRoleUser().filter(role =>
            role.name.toLowerCase().includes(search)
          )
        );
      })
    )
    .subscribe(roles => {
      this.filteredRoles.set(roles);
    });
  }

  ngOnInit() {
    this.getRoles()
    this.searchRole()
    this.getUsers()
  }

  // click button => search
  handleCLickSearch(): void {
    const search = this.searchControl.value.trim().toLowerCase();

    const roles = this.getRoleUser().filter(role =>
      role.name.toLowerCase().includes(search)
    );

    this.filteredRoles.set(roles);

  }

  //User count
  // getUserCountByRole(roleId: string): number {
  //   return this.users().filter(user =>
  //     user.roleId === roleId
  //   ).length;
  // }
  
  getUserCountByRole(roleId: string): number {
    return this.users().filter(user =>
      user.roleId.includes(roleId)
    ).length;
  }


  handleClickDelete() {
    this.deleteRole(this.selectedRoleDelete()?.id)
    this.handleCloseModalDelete()
    this.handleOpenToastDelete()
  }




  // Validate form
  validateForm = this.fb.nonNullable.group({
    roleName: [
      '',
      [
        Validators.required,
      ]
    ],

    default: [false],
    public: [false]


  })

  submitted = false;

  // submit edit
  onSubmit(): void {
    this.submitted = true;

    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    const selectedRole = this.selectedRole();

    if (!selectedRole) {
      return;
    }

    const formValue = this.validateForm.getRawValue();

    const status: ('default' | 'public')[] = [];

    if (formValue.default) {
      status.push('default');
    }

    if (formValue.public) {
      status.push('public');
    }

    const roleData: RoleItem = {
      id: selectedRole.id,
      name: formValue.roleName,
      status
    };

    this.RoleService.patchRole(selectedRole.id, roleData).subscribe({
      next: () => {
        this.validateForm.reset();
        this.isModalOpenEdit.set(false);
        this.selectedRole.set(null);
        this.submitted = false;

        this.getRoles();

        this.handleOpenToast()
      },
      error: error => {
        console.error(error);
        this.errorText.set(error?.error ?? null)
        this.handleOpenToastError()
      }
    });

    this.submitted = false
  }


  // submit post
  onSubmitNewRole(): void {
    this.submitted = true;

    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    const formValue = this.validateForm.getRawValue();

    const status: ('default' | 'public')[] = [];
    // const id: string | undefined = ""

    if (formValue.default) {
      status.push('default');
    }

    if (formValue.public) {
      status.push('public');
    }

    const roleData: RoleItem = {
      id: `role-${Date.now()}`,
      name: formValue.roleName,
      status
    };

    this.RoleService.postRole(roleData).subscribe({
      next: () => {
        this.validateForm.reset({
          roleName: '',
          default: false,
          public: false
        });

        this.isModalOpenNew.set(false);
        this.submitted = false;

        this.getRoles();

        this.handleOpenToast()
      },
      error: error => {
        console.error(error);
        this.errorText.set(error?.error?.error ?? null)
        this.handleOpenToastError()
      }
    });

    this.submitted = false
  }

  get roleName() {
    return this.validateForm.controls.roleName;
  }




}
