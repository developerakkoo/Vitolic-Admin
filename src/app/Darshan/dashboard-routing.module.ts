import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PushNotificationComponent } from './push-notification/push-notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationlistComponent } from './Donation/donationlist/donationlist.component';
import { EventListComponent } from './Event/event-list/event-list.component';
import { EventValunteersListComponent } from './Event/event-valunteers-list/event-valunteers-list.component';
import { NewListComponent } from './New/new-list/new-list.component';


import { UserListComponent } from './user/user-list/user-list.component';
import { TermsComponent } from './Terms and conditions/terms/terms.component';

import { DonationUserComponent } from './Donation/donation-user/donation-user.component';
import { AddDonationComponent } from './Donation/add-donation/add-donation.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { EventBookingRequestComponent } from './Event/event-booking-request/event-booking-request.component';
import { EventDonationListComponent } from './Event/event-donation-list/event-donation-list.component';
import { ViewEditEventComponent } from './Event/view-edit-event/view-edit-event.component';
import { NewsAddComponent } from './New/news-add/news-add.component';


import { AddTermsComponent } from './Terms and conditions/add-terms/add-terms.component';
import { MenuListComponent } from './Catering services/menu-list/menu-list.component';
import { CateringServicesListComponent } from './Catering services/catering-services-list/catering-services-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

import { AddTemplateComponent } from './E-Card/add-template/add-template.component';
import { TemplateListComponent } from './E-Card/template-list/template-list.component';
import { PaymentStatusComponent } from './Catering services/payment-status/payment-status.component';
import { ECardUsersListComponent } from './E-Card/e-card-users-list/e-card-users-list.component';
import { AddECardUsersComponent } from './E-Card/add-e-card-users/add-e-card-users.component';
import { AddServicesComponent } from './Catering services/add-services/add-services.component';

import { ProfileComponent } from './settings/profile/profile.component';
import { SubadminListComponent } from './subadmin/subadmin-list/subadmin-list.component';



import { ProductComponent } from './product/product.component';
import { OderComponent } from './oder/oder.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { SubadminComponent } from './subadmin/subadmin/subadmin.component';
import { BannerComponent } from './banner/banner.component';
import { TotalCityComponent } from './total-city/total-city.component';
import { CouponComponent } from './coupon/coupon.component';
import { CollectionComponent } from './collection/collection.component';
import { CountryCodeComponent } from './country-code/country-code.component';
import { TimeSlotsComponent } from './time-slots/time-slots.component';

import { SubscriptionComponent } from './subscription/subscription.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacylistComponent } from './Privacy policy/privacylist/privacylist.component';

const routes: Routes = [

  {
    path: 'push-notification', component: PushNotificationComponent,

  },
 
  {
    path: 'dashboard', component: DashboardComponent,

  },
  {
    path: 'add-donation', component: AddDonationComponent,

  },
  {
    path: 'user-donation-list', component: DonationUserComponent,

  },
  {
    path: 'donation-list', component: DonationlistComponent,

  },
  {
    path: 'event-list', component: EventListComponent,

  },
  {
    path: 'add-event', component: AddEventComponent,

  },
  {
    path: 'event-booking', component: EventBookingRequestComponent,

  },
  {
    path: 'event-donation-list', component: EventDonationListComponent,

  },
  {
    path: 'event-valunteers-list', component: EventValunteersListComponent,

  },
  {
    path: 'edit-event', component: ViewEditEventComponent,

  },
  {
    path: 'news-list', component: NewListComponent,

  },
  {
    path: 'add-news/:id', component: NewsAddComponent,

  },

  {
    path: 'user-list', component: UserListComponent,

  },
  
  {
    path: 'user-profile', component: UserProfileComponent,

  },
  {
    path: 'terms', component: TermsComponent,

  },
  {
    path: 'add-terms', component: AddTermsComponent,

  },
  {
    path: 'menu-list', component: MenuListComponent,

  },
  {
    path: 'catering-service-list', component: CateringServicesListComponent,

  },
  {
    path: 'payment', component: PaymentComponent,

  },
 
  
  {
    path: 'add-template', component: AddTemplateComponent,

  },
  {
    path: 'template-list', component: TemplateListComponent,

  },
  {
    path: 'add-e-card-users', component: AddECardUsersComponent,

  },
  {
    path: 'e-card-users-list', component: ECardUsersListComponent,

  },
  
  {
    path: 'add-services',component: AddServicesComponent,

  },
  {
    path: 'profile',component: ProfileComponent,

  },
  {
    path: 'subadmin-list',component: SubadminListComponent,

  },
  // {
  //   path: 'add-subadmin',component: AddSubadminComponent,

  // },
{
  path :'subadmin',component:SubadminComponent,
},

 
  {
    path: 'product',component: ProductComponent,
  },
  {
    path :'order',component: OderComponent,
  },
  {
    path : 'deliver-boy',component:DeliverBoyComponent,
  },
  {
    path :'banner',component:BannerComponent,
  },
  {
    path:'total-city',component:TotalCityComponent
  },
  {
    path: 'coupon',component:CouponComponent,
  },
  {
    path:'collection',component:CollectionComponent,
  },
  {
    path:'country-code',component:CountryCodeComponent,
  },
  {
    path:'timeslots',component:TimeSlotsComponent
  },
  {
    path:'coupon-code',component:CountryCodeComponent,
  },
{
  path:'subscription',component:SubscriptionComponent,
},
{
  path:'privacylist',component:PrivacylistComponent,
}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DarshanRoutingModule {
}
