import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  /* isLoading$=of(true); */
    isLoading$=this.spinnerService.isLoading$;
  constructor(private  spinnerService: SpinnerService){}
}
