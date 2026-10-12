import { Component, inject, signal } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, finalize, of, switchMap, tap } from 'rxjs';
import { RoleItem, UserItem } from '../../../typescript/home';
import { UserService } from '../../../service/user/user-service';
import { RoleService } from '../../../service/role/role-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Toast } from '../../../components/toast/toast';

@Component({
  selector: 'app-user-page',
  imports: [ReactiveFormsModule, MatIcon, Toast],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {

  private UserService = inject(UserService)
  private RoleService = inject(RoleService)
  private fb = inject(FormBuilder)

  isLoading = false

  errorText = signal<string | null>(null);

  getUser = signal<UserItem[]>([])
  roles = signal<RoleItem[]>([])


  showPassword = signal(false)

  showToastSuccess = signal(false)
  showToastDelete = signal(false)
  showToastError = signal(false)

  openActionId = signal<string | null>(null);
  openUp = signal(false);

  // MỞ MODAL EDIT
  isModalOpenEdit = signal(false)
  selectedUser = signal<UserItem | null>(null); //data

  // SỬA, CHỌN ID ROLE 
  editRoleIds = signal<string[]>([]);
  selectedRoleIds = signal<string[]>([]);

  // TẠO SEARCH CONTROL + DATA SAU SEARCH
  searchControl = this.fb.nonNullable.control('');
  filteredUsers = signal<UserItem[]>([]); //data sau search

  // MỞ MODAL DELETE + CHỌN ROLE DELETE
  isModalOpenDelete = signal(false)
  selectedUserDelete = signal<UserItem | null>(null);

  // MỞ MODAL DETAIL
  isModalOpenDetail = signal(false)

  // TẠO MỚI
  isModalOpenNew = signal(false)
  

  // CHUYỂN TAB
  activeTab = signal<'user' | 'roles'>('user');
  activeTabDetail = signal<'userInfo' | 'general'>('userInfo');








  changeTab(tab: 'user' | 'roles'): void {
    this.activeTab.set(tab);
  }

  changeTabDetail(tab: 'userInfo' | 'general'): void {
    this.activeTabDetail.set(tab);
  }




  //SUCCESS
  handleOpenToast() {
    this.showToastSuccess.set(true)

    setTimeout(() => {
      this.showToastSuccess.set(false);
    }, 2000);
  }

  handleCloseToast() {
    this.showToastSuccess.set(false)
  }


  // DELETE SUCCESS
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





  handleOpenModalDetail(item: UserItem): void {
    this.closeActionMenu()
    this.activeTabDetail.set('userInfo')

    this.isModalOpenDetail.set(true);
    this.selectedUser.set(item);
    this.selectedUserDelete.set(null);
  }

  handleCloseModalDetail() {
    this.isModalOpenDetail.set(false)
  }





  // OPEN MODAL TẠO MỚI
  handleOpenModalNew(): void {
    this.activeTab.set('user')

    this.validateFormNew.reset({
      userNameNew: '',
      name: '',
      surname: '',
      emailAddressNew: '',
      phoneNumber: '',
      roleId: [''],
      password: '',
    });

    this.isModalOpenNew.set(true);
    this.submitted = false;
    this.selectedUser.set(null);
    this.selectedUserDelete.set(null);
  }

  // ĐÓNG MODAL TẠO MỚI
  handleCloseModalNew() {
    this.validateForm.reset({
      userName: '',
      name: '',
      surname: '',
      emailAddress: '',
      phoneNumber: '',
      roleId: ['']

    });
    
    this.isModalOpenNew.set(false)
    this.selectedRoleIds.set([]);
  }



  
  // MỞ MODAL DELETE
  handleOpenModalDelete(item: UserItem): void {
    this.closeActionMenu()

    this.selectedUserDelete.set(item);

    this.isModalOpenDelete.set(true);
    this.openActionId.set(null);
    this.submitted = false;
  }

  // ĐÓNG MODAL DELETE
  handleCloseModalDelete() {
    this.isModalOpenDelete.set(false)
  }





  //Mở modal edit, lưu data sau patch
  handleOpenModalEdit(user: UserItem): void {
    this.closeActionMenu()
    this.activeTab.set('user')

    this.selectedUser.set(user);

    this.editRoleIds.set([...user.roleId]);

    this.validateForm.reset({
      userName: user.username,
      name: user.name,
      surname: user.surname,
      emailAddress: user.email,
      phoneNumber: user.phone
    });

    this.activeTab.set('user');
    this.submitted = false;
    this.isModalOpenEdit.set(true);

  }

  // Đóng modal
  handleCloseModalEdit(): void {
    this.isModalOpenEdit.set(false);
    this.selectedUser.set(null);

    this.validateForm.reset({
      userName: '',
      name: '',
      surname: '',
      emailAddress: '',
      phoneNumber: '',
      roleId: ['']
    });

    this.submitted = false;
  }





  toggleAction(id: string, event: MouseEvent): void {

    // check menu scroll trên hay dưới
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
  
  getUsers(): void {
    this.isLoading = true;

    this.UserService.getUser()
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
    .subscribe(data => {
      this.getUser.set(data);
      this.filteredUsers.set(data)
    });
  }

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
        this.roles.set(role);
      });
  }


  // get Data after search => filterRoles
  searchUser(): void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap(keyword => {
        const search = keyword.trim().toLowerCase();

        return of(
          this.getUser().filter(role =>
            role.username.toLowerCase().includes(search) ||
            role.name?.toLowerCase().includes(search) ||
            role.surname?.toLowerCase().includes(search) 
          )
        );
      })
    )
    .subscribe(roles => {
      this.filteredUsers.set(roles);
    });
  }

  // DELETE DATA
  deleteUser(id: string | undefined): void {
    if (!id) {
      return;
    }
    this.UserService.deleteUser(id).subscribe({
      next: () => {
        console.log('Delete user successfully');

        // Load lại danh sách
        this.getUsers();

      },
      error: error => {
        console.error('Delete user failed:', error);
      }
    });
  }

  ngOnInit() {
    this.getUsers()
    this.getRoles()
    this.searchUser()
  }


  handleCLickSearch(): void {
    const search = this.searchControl.value.trim().toLowerCase();

    const roles = this.getUser().filter(role =>
      role.username.toLowerCase().includes(search) ||
      role.name?.toLowerCase().includes(search) ||
      role.surname?.toLowerCase().includes(search) 
    );

    this.filteredUsers.set(roles);

  }


  getRoleNames(roleIds: string[]): string[] {
    return roleIds
      .map(roleId =>
        this.roles().find(role => role.id === roleId)?.name
      )
      .filter((name): name is string => !!name);
  }


  handleClickDelete() {
    this.deleteUser(this.selectedUserDelete()?.id)
    this.handleCloseModalDelete()
    this.handleOpenToastDelete()
  }



  // check RoleID cho body của user
  toggleRole(roleId: string): void {
    this.editRoleIds.update(roleIds => {
      if (roleIds.includes(roleId)) {
        return roleIds.filter(id => id !== roleId);
      }

      return [...roleIds, roleId];
    });
  }

  toggleRoleNew(roleId: string): void {
    this.selectedRoleIds.update(roleIds => {
      if (roleIds.includes(roleId)) {
        return roleIds.filter(id => id !== roleId);
      }

      return [...roleIds, roleId];
    });
  }




  // Validate form
  validateForm = this.fb.nonNullable.group({
    userName: [
      '',
      [
        Validators.required,
      ]
    ],

    name: [''],
    surname: [''],

    emailAddress: [
      '',
      [
        Validators.required,
        Validators.email,
      ]
    ],

    phoneNumber: [''],

    roleId: [[] as string[]],

  })



  validateFormNew = this.fb.nonNullable.group({
    userNameNew: [
      '',
      [
        Validators.required,
      ]
    ],

    name: [''],
    surname: [''],

    emailAddressNew: [
      '',
      [
        Validators.required,
        Validators.email,
      ]
    ],

    phoneNumber: [''],

    roleId: [[] as string[]],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
  })







  submitted = false;

  // submit edit
  onSubmit(): void {
    this.submitted = true;

    if (this.validateForm.invalid) {
      this.validateForm.markAllAsTouched();
      return;
    }

    const selectedUser = this.selectedUser();

    if (!selectedUser) {
      return;
    }

    const formValue = this.validateForm.getRawValue();

    const userData: UserItem = {
      id: selectedUser.id,
      username: formValue.userName,
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.emailAddress,
      phone: formValue.phoneNumber,
      roleId: this.editRoleIds()
    };

    this.UserService.patchUser(selectedUser.id, userData).subscribe({
      next: () => {
        this.validateForm.reset();
        this.isModalOpenEdit.set(false);
        this.selectedUser.set(null);
        this.submitted = false;

        this.getUsers();

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
  onSubmitNewUser(): void {
    this.submitted = true;

    if (this.validateFormNew.invalid) {
      this.validateFormNew.markAllAsTouched();
      return;
    }

    const formValue = this.validateFormNew.getRawValue();

    const id: string | undefined = ""

    const userData: UserItem = {
      id,
      username: formValue.userNameNew,
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.emailAddressNew,
      phone: formValue.phoneNumber,
      roleId: this.selectedRoleIds(),
      password: formValue.password
    };

    this.UserService.postUser(userData).subscribe({
      next: () => {
        this.validateFormNew.reset({
          userNameNew: '',
          name: '',
          surname: '',
          emailAddressNew: '',
          phoneNumber: '',
          roleId: [''],
          password: ''
        });

        this.isModalOpenNew.set(false);
        this.submitted = false;

        this.getUsers();

        this.handleOpenToast()
      },
      error: error => {
        console.error(error);
        console.log(error?.status)
        this.errorText.set(error?.error?.error ?? null)
        this.handleOpenToastError()
      }
    });

    this.submitted = false
  }

  get userName() {
    return this.validateForm.controls.userName;
  }

  get emailAddress() {
    return this.validateForm.controls.emailAddress;
  }


  get userNameNew() {
    return this.validateFormNew.controls.userNameNew;
  }

  get emailAddressNew() {
    return this.validateFormNew.controls.emailAddressNew;
  }

  get password() {
    return this.validateFormNew.controls.password;
  }
}
