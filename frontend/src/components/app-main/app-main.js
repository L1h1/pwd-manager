import React from 'react';

import AppHeader from '../app-header';
import {categories} from "../../http/userAPI";

export default class AppMain extends Components {

  state = {

  }

  getCategoryItems = async () => {
    const respons = await categories();
  }

  render() {
    return (
      <div>
        <AppHeader />
      </div>
    );
  } 
};
