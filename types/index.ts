import React from 'react';

export interface Highlight {
  icon: React.ElementType;
  text: string;
}

export interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  price: string;
  images: string[];
  highlights: Highlight[];
}

export interface IdealCarData {
  title: string;
  subtitle:string;
  benefits: Benefit[];
}

export interface DetailsData {
  title: string;
  subtitle: string;
  specs: Spec[];
}

export interface CarData {
  pageTitle: string;
  carName: string;
  headerTitle: string;
  hero: HeroData;
  idealCar: IdealCarData;
  details: DetailsData;
  contact: {
    ownerPhoneNumber: string;
  };
}
