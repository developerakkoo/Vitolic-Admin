let sidebarData: any = [
  {
    name: 'Home',
    link: '/admin/dashboard',
    image: '../../../../assets/images/home.svg',
    children: [],
    icon: false,
    isActive: false,
  },
 
  // {
  //   name: 'Meditation',
  //   link: '/admin/meditation',
  //   image: '../../../../assets/images/meditation.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
  {
    name: 'Product',
    link: '/admin/product',
    image: '../../../../assets/images/event.svg',
    children: [
     
     
    ],
    icon: false,
    isActive: false,
  },
  {
    name: 'Order',
    link: '/admin/order',
    image: '../../../../assets/images/class.svg',
    children: [],
    icon: false,
    isActive: false,
  },
  {
    name: 'Users',
    link: '/admin/user-list',
    image: '../../../../assets/images/course.svg',
    children: [],
    icon: false,
    isActive: false,
  },
  {
    name: ' Deliver Boy',
    link: '/admin/deliver-boy',
    image: '../../../../assets/images/category.svg',
    children: [
      // {
      //   name: 'Menu',
      //   link: '/admin/menu-list',
      // },
      // {
      //   name: 'Catering List',
      //   link: '/admin/catering-service-list',
      // },
      // {
      //   name: 'Order Payment Status',
      //   link: '/admin/payment-status',
      // },
    ],
    icon: false,
    isActive: false,
  },
  {
    name: ' Sub-Admin',
    link: '/admin/subadmin',
    image: '../../../../assets/images/category.svg',
    children: [
      // {
      //   name: 'Menu',
      //   link: '/admin/menu-list',
      // },
      // {
      //   name: 'Catering List',
      //   link: '/admin/catering-service-list',
      // },
      // {
      //   name: 'Order Payment Status',
      //   link: '/admin/payment-status',
      // },
    ],
    icon: false,
    isActive: false,
  },
  {
    name: ' Tatal Banner',
    link: '/admin/banner',
    image: '../../../../assets/images/reward.svg',
    children: [
      // {
      //   name: 'Menu',
      //   link: '/admin/menu-list',
      // },
      // {
      //   name: 'Catering List',
      //   link: '/admin/catering-service-list',
      // },
      // {
      //   name: 'Order Payment Status',
      //   link: '/admin/payment-status',
      // },
    ],
    icon: false,
    isActive: false,
  },
  {
    name:'Tatal City',
    link :'/admin/total-city',
    image: '../../../../assets/images/reward.svg',
    children:[],
    icon:false,
    isActive:false,
  }
  ,
  // {
  //   name: ' Rewards And Redemption',
  //   link: '',
  //   image: '../../../../assets/images/reward.svg',
  //   children: [
  //     {
  //       name: 'Merchant Coupon',
  //       link: '/admin/merchant-coupon',
  //     },
  //     {
  //       name: 'Mandir Coupon',
  //       link: '/admin/mandir-coupon',
  //     },
  //     // {
  //     //   name: 'Category Coupon',
  //     //   link: '/admin/category-coupon',
  //     // },
  //   ],
  //   icon: true,
  //   isActive: false,
  // },
  // {
  //   name: 'Donation',
  //   link: '',
  //   image: '../../../../assets/images/donation.svg',
  //   children: [
  //     {
  //       name: 'Donation List',
  //       link: '/admin/donation-list',
  //     },
  //     {
  //       name: 'Donation User List',
  //       link: '/admin/user-donation-list',
  //     },
  //   ],
  //   icon: true,
  //   isActive: false,
  // },
  // {
  //   name: 'Business promotion and advertising',
  //   link: '',
  //   image: '../../../../assets/images/bussiness.svg',
  //   children: [
  //     {
  //       name: 'Advertisers and Promotors',
  //       link: '/admin/promotors-list',
  //     },
  //   ],
  //   icon: true,
  //   isActive: false,
  // },
  {
    name: 'Notification',
    link: '/admin/push-notification',
    image: '../../../../assets/images/Survey form 3.svg',
    children: [],
    icon: false,
    isActive: false,
  },
  // {
  //   name: 'News',
  //   link: '/admin/news-list',
  //   image: '../../../../assets/images/news.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
  // {
  //   name: 'Chat',
  //   link: '/admin/chat-list',
  //   image: '../../../../assets/images/chat.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
   {
    name: 'Subscription',
    link: '',
    image: '../../../../assets/images/sub admin 2.svg',
    children: [
      {
        name: 'Monthly Subscription ',
        link: '/admin/month-subscription',
      },
      {
        name: 'Pick Of Your Choice',
        link: '/admin/pick-choice',
      },
    ],
    icon: true,
    isActive: false,
  },
  // {
  //   name: 'E-card',
  //   link: '',
  //   image: '../../../../assets/images/bi_card-list.svg',
  //   children: [
  //     {
  //       name: 'Template List',
  //       link: '/admin/template-list',
  //     },
  //     {
  //       name: ' Users list',
  //       link: '/admin/e-card-users-list',
  //     },
  //   ],
  //   icon: true,
  //   isActive: false,
  // },
  // {
  //   name: 'Sub Admin',
  //   link: '/admin/subadmin-list',
  //   image: '../../../../assets/images/sub admin 2.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
  // {
  //   name: 'Push Notification',
  //   link: '/admin/push-notification',
  //   image: '../../../../assets/images/notification.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
  // {
  //   name: 'Users',
  //   link: '/admin/user-list',
  //   image: '../../../../assets/images/user.svg',
  //   children: [],
  //   icon: false,
  //   isActive: false,
  // },
  {
    name: 'Settings',
    link: '',
    image: '../../../../assets/images/uiw_setting .svg',
    children: [
      {
        name: 'Privacy and Policy',
        link: '/admin/privacylist',
      },
      {
        name: 'Terms and Conditions',
        link: '/admin/terms',
      },
    ],
    icon: true,
    isActive: false,
  },
  {
    name:'Coupon',
    link :'/admin/coupon',
    image: '../../../../assets/images/reward.svg',
    children:[],
    icon:false,
    isActive:false,
  },
  {
    name:'Collection',
    link :'/admin/collection',
    image: '../../../../assets/images/uiw_setting .svg',
    children:[],
    icon:false,
    isActive:false,
  },
  {
    name:'Other',
    link :'',
    image: '../../../../assets/images/uiw_setting .svg',
    children:[
      {
              name: 'Country Code',
              link: '/admin/country-code',
            },
            {
              name: 'Time Slots',
              link: '/admin/timeslots',
            },
            {
              name: 'Coupon Code',
              link: '/admin/coupon-code',
            },
    ],
    icon:true,
    isActive:false,
  },
  {
    name:'Payment',
    link :'/admin/payment',
    image: '../../../../assets/images/reward.svg',
    children:[],
    icon:false,
    isActive:false,
  },
]

export { sidebarData }
