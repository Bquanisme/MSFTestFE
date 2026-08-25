import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { ProgressBarService } from '../../../service/component/progress-bar/progress-bar-service';
import { ProgressBar } from '../../../typescript/home';
import { map } from 'rxjs';

@Component({
  selector: 'app-progress-bar-page',
  imports: [Breadcrumb],
  templateUrl: './progress-bar-page.html',
  styleUrl: './progress-bar-page.css',
})
export class ProgressBarPage {

  private progressBarService = inject(ProgressBarService)

  basicProgress = signal<ProgressBar[]>([])
  coloredProgress = signal<ProgressBar[]>([])
  stripedProgress = signal<ProgressBar[]>([])
  animatedProgress = signal<ProgressBar[]>([])
  gradientProgress = signal<ProgressBar[]>([])
  skillsProgress = signal<ProgressBar[]>([])
  multipleProgress = signal<ProgressBar[]>([])
  multipleLabelProgress = signal<ProgressBar[]>([])
  multipleProjectProgress = signal<ProgressBar[]>([])


  width = signal<number>(0);
  isRunning = false;

  widthTask = signal<number>(25);

  increaseProgress() {
    // if (this.widthTask() >= 100) {
    //     this.widthTask.set(100)
    // }

    // this.widthTask.update(value => value + 10)
    this.widthTask.update(value => Math.min(value + 10, 100));
  }

  reduceProgress() {
    this.widthTask.update(value => Math.max(value - 10, 0));
  }

  resetChangeProgress() {
    this.widthTask.set(25)
  }




  startProgress() {
    if (this.isRunning || this.width() >= 100) {
        return;
    }

    this.isRunning = true;

    const intervalId = setInterval(() => {

        this.width.update(value => value + 10);

        if (this.width() >= 100) {
            this.width.set(100);

            this.isRunning = false;

            clearInterval(intervalId);
        }

    }, 500);
  }

  resetProgress() {
      this.width.set(0);
      this.isRunning = false;
  }




  basicBar() {
    this.progressBarService.basicProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.basicProgress.set(data)
    })
  }

  coloredBar() {
    this.progressBarService.coloredProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.coloredProgress.set(data)
    })
  }

  stripedBar() {
    this.progressBarService.stripedProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.stripedProgress.set(data)
    })
  }

  animatedBar() {
    this.progressBarService.animatedProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.animatedProgress.set(data)
    })
  }

  gradientBar() {
    this.progressBarService.gradientProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.gradientProgress.set(data)
    })
  }

  skillsBar() {
    this.progressBarService.skillsProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.skillsProgress.set(data)
    })
  }

  multipleBar() {
    this.progressBarService.multipleProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.multipleProgress.set(data)
    })
  }

  multipleLabelBar() {
    this.progressBarService.multipleLabelProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.multipleLabelProgress.set(data)
    })
  }


  multipleProjectBar() {
    this.progressBarService.multipleProjectProgressBar()
    .pipe(
      map(res => res.data)
    )
    .subscribe(data => {
      this.multipleProjectProgress.set(data)
    })
  }




  ngOnInit() {
    this.basicBar();
    this.coloredBar();
    this.gradientBar();
    this.animatedBar();
    this.skillsBar();
    this.stripedBar();
    this.multipleBar();
    this.multipleLabelBar();
    this.multipleProjectBar()
  }

}
