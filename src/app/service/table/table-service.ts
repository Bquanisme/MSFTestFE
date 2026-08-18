import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  
  basicTable() {
    return [
      {
        id: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo'
      },
      {
        id: 2,
        first: 'Jacob',
        last: 'Thornton',
        handle: '@fat'
      },
      {
        id: 3,
        first: 'Larry',
        last: 'the Bird',
        handle: '@twitter'
      },
    ]
  }

  dataTable() {
    return [
      {
        id: 1,
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: 61,
        startDate: '2011/04/25',
        salary: '$320,800'
      },
      {
        id: 2,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: 63,
        startDate: '2011/07/25',
        salary: '$170,750'
      },
      {
        id: 3,
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: 66,
        startDate: '2009/01/12',
        salary: '$86,000'
      },
      {
        id: 4,
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: 22,
        startDate: '2012/03/29',
        salary: '$433,060'
      },
      {
        id: 5,
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: 33,
        startDate: '2008/11/28',
        salary: '$162,700'
      },
      {
        id: 6,
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: 61,
        startDate: '2012/12/02',
        salary: '$372,000'
      },
      {
        id: 7,
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: 59,
        startDate: '2012/08/06',
        salary: '$137,500'
      },
      {
        id: 8,
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: 55,
        startDate: '2010/10/14',
        salary: '$327,900'
      },
      {
        id: 9,
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: 39,
        startDate: '2009/09/15',
        salary: '$205,500'
      },
      {
        id: 10,
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: 23,
        startDate: '2008/12/13',
        salary: '$103,600'
      },
      {
        id: 11,
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: 30,
        startDate: '2008/12/19',
        salary: '$90,560'
      },
      {
        id: 12,
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: 22,
        startDate: '2013/03/03',
        salary: '$342,000'
      },
      {
        id: 13,
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: 36,
        startDate: '2008/10/16',
        salary: '$470,600'
      },
      {
        id: 14,
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: 43,
        startDate: '2012/12/18',
        salary: '$313,500'
      },
      {
        id: 15,
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: 19,
        startDate: '2010/03/17',
        salary: '$385,750'
      },
      {
        id: 16,
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: 66,
        startDate: '2012/11/27',
        salary: '$198,500'
      },
      {
        id: 17,
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: 64,
        startDate: '2010/06/09',
        salary: '$725,000'
      },
      {
        id: 18,
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: 59,
        startDate: '2009/04/10',
        salary: '$237,500'
      },
      {
        id: 19,
        name: 'Mark',
        position: 'Otto',
        office: '@mdo',
        age: 0,
        startDate: '',
        salary: ''
      },
      {
        id: 20,
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: 41,
        startDate: '2012/10/13',
        salary: '$132,000'
      },
      {
        id: 21,
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        age: 30,
        startDate: '2011/09/03',
        salary: '$345,000'
      },
      {
        id: 22,
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: 40,
        startDate: '2009/06/25',
        salary: '$675,000'
      },
      {
        id: 23,
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: 21,
        startDate: '2011/12/12',
        salary: '$106,450'
      },
      {
        id: 24,
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: 23,
        startDate: '2010/09/20',
        salary: '$85,600'
      },
      {
        id: 25  ,
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: 47,
        startDate: '2009/10/09',
        salary: '$1,200,000'
      },
    ]
  }

  exportDataTable() {
    return [
      {
        id: 1,
        product: 'MacBook Pro 16"',
        category: 'Laptops',
        stock: 45,
        price: 2399,
        status: 'In Stock',
      },
      {
        id: 2,
        product: 'iPhone 14 Pro',
        category: 'Phones',
        stock: 128,
        price: 999,
        status: 'In Stock',
      },
      {
        id: 3,
        product: 'iPad Air',
        category: 'Tablets',
        stock: 23,
        price: 599,
        status: 'Low Stock',
      },
      {
        id: 4,
        product: 'AirPods Pro',
        category: 'Accessories',
        stock: 89,
        price: 249,
        status: 'In Stock',
      },
      {
        id: 5,
        product: 'Apple Watch Series 8',
        category: 'Wearables',
        stock: 5,
        price: 399,
        status: 'Out of Stock',
      },
      {
        id: 6,
        product: 'Samsung Galaxy S23',
        category: 'Phones',
        stock: 67,
        price: 799,
        status: 'In Stock',
      },
      {
        id: 7,
        product: 'Dell XPS 13',
        category: 'Laptops',
        stock: 12,
        price: 1299,
        status: 'Low Stock',
      },
      {
        id: 8,
        product: 'Sony WH-1000XM5',
        category: 'Accessories',
        stock: 34,
        price: 399,
        status: 'In Stock',
      }
    ]
  }

}
