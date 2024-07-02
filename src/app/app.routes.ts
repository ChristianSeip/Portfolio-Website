import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {LegalNoticeComponent} from "./pages/legal-notice/legal-notice.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
];