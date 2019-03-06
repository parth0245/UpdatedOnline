import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owener-property-submit',
  templateUrl: './owener-property-submit.component.html',
  styleUrls: ['./owener-property-submit.component.css']
})
export class OwenerPropertySubmitComponent implements OnInit {
  sale: boolean = false;
  rent: boolean = false;
  pg: boolean = false;

  bedrooms: Array<number> = [];
  balconies: Array<any> = [];
  furnishedStatus: Array<string> = [];
  setBedroomTo: any;
  setBalconiesTo: any;
  setFloorsTo: any;
  setFurnishedStatus: any;
  propertyStatus: any;

  username: string;
  email: string;
  mobile: string;
  propertyFor: string;

  propertyTypes: Array<any>;
  selectedPropertyType: number;
  propertylocations: Array<any>;
  selectedpropertyLocation: string;
  societyName: string;

  totalFloors: number;
  selectedFloor: number;
  bathroomsCount: string;

  constructionAllowed: string;
  openSides: string;
  pgAvailableFor: string;
  pgOccupancy: string;
  pgAge: string;
  pgtenants: string;
  pgBathroom: string;
  pgBalcony: string;
  pgCommonArea: string;

  propertyCoveredArea: string;
  propertyCoveredAreaUnit: string;
  propertyCarpetArea: string;
  propertyCarpetAreaUnit: string;
  propertyAvailabilityType: string;

  availableFromForRent: string;
  rentPropAvailableDay: string;
  rentPropAvailableMonth: string;
  rentPropAvailableYEar: string;
  days: Array<number> = [];
  months: Array<String> = ['January', 'Feruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
  years: Array<number>=[];
  year:number;
  date: Date = new Date();
  constructor() {
    for (var i = 0; i < 10; i++) {
      this.bedrooms[i] = i + 1;
      this.balconies[i] = i + 1;
    }
    for (var i = 0; i < 31; i++) {
      this.days[i] = i + 1;
    }
    this.furnishedStatus[0] = "Furnished";
    this.furnishedStatus[1] = "Unfurnished";
    this.furnishedStatus[2] = "Semi-Furnished";
    this.propertyTypes = [
      { id: 1, name: "Flat" },
      { id: 2, name: "Individual House" },
      { id: 3, name: "Villa" },
      { id: 4, name: "Multistory appartment" },
      { id: 5, name: "Builders floor" }
    ];
    this.propertylocations = [
      { id: 0, name: 'Geeta Bhavan' }
    ]
    this.year = this.date.getFullYear();2019
    for (var i = 0; i <= 3 ; i++) {
      this.years[i] = this.year+i;
    }

  }

  selectFurnished(index) {
    this.setFurnishedStatus = index;
  }
  selectBedrooms(index) {
    this.setBedroomTo = index;
  }
  selectBalconies(index) {
    this.setBalconiesTo = index;
  }

  ngOnInit() {
  }

  setPropertyAvailabilityType(type) {
    this.propertyAvailabilityType = type;
  }

  setFor(prop) {
    if (prop == 'sale') {
      this.sale = true;
      this.rent = false;
      this.pg = false;
    }
    else if (prop == 'rent') {
      this.sale = false;
      this.rent = true;
      this.pg = false;
    }
    else {//pg
      this.sale = false;
      this.rent = false;
      this.pg = true;
    }
  }

}
