import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TermsComponent } from './Terms and conditions/terms/terms.component';
import { AddTermsComponent } from './Terms and conditions/add-terms/add-terms.component';
import { MenuListComponent } from './Catering services/menu-list/menu-list.component';
import { CateringServicesListComponent } from './Catering services/catering-services-list/catering-services-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { PaymentStatusComponent } from './Catering services/payment-status/payment-status.component';
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
import { MonthSubscriptionComponent } from './month-subscription/month-subscription.component';
import { PickChoiceComponent } from './pick-choice/pick-choice.component';
import{AddMathlyComponent} from './add-mathly/add-mathly.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RefundComponent } from './refund/refund.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [

  {
    path: 'push-notification', component: PushNotificationComponent,

  },
 
  {
    path: 'dashboard', component: DashboardComponent,

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
},
{
  path:'month-subscription',component:MonthSubscriptionComponent,
},
{
  path:'pick-choice',component:PickChoiceComponent,
},
{
  path: 'add-mathly',component:AddMathlyComponent,
},
{
  path: 'add-product',component:AddProductComponent,
},
{
  path: 'refund', component:RefundComponent,
},
{
  path: 'cart',component:CartComponent,
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
