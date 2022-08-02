import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
  fastCheckbox,
  fastDataGrid,
  fastDataGridCell,
  fastDataGridRow,
} from '@microsoft/fast-components';

provideFASTDesignSystem().register(
  fastCard(),
  fastButton(),
  fastTextField(),
  fastCheckbox(),
  fastDataGridCell(),
  fastDataGridRow(),
  fastDataGrid()
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
