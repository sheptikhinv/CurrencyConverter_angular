import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
