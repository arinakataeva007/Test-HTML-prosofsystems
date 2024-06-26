import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './children/dashboard/components/left-navigation/left-navigation.component';
import { AdministrationPageComponent } from './children/dashboard/pages/administration-page/administration-page.component';
import { MainPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/main-page.component';
import { AccessRightsPageComponent } from './children/dashboard/pages/administration-page/pages/access-rights-page/access-rights-page.component';
import { StartingTheAplicationPageComponent } from './children/dashboard/pages/administration-page/pages/starting-the-aplication-page/starting-the-aplication-page.component';
import { GroupsPageComponent } from './children/dashboard/pages/administration-page/pages/groups-page/groups-page.component';
import { InteractionTabsComponent } from './children/dashboard/pages/administration-page/pages/interaction-tabs/interaction-tabs.component';
import { InteractionsPageComponent } from './children/dashboard/pages/administration-page/pages/interactions-page/interactions-page.component';
import { MyNotesPageComponent } from './children/dashboard/pages/administration-page/pages/my-notes-page/my-notes-page.component';
import { SettingsPageComponent } from './children/dashboard/pages/administration-page/pages/settings-page/settings-page.component';
import { TasksPageComponent } from './children/dashboard/pages/administration-page/pages/tasks-page/tasks-page.component';
import { NavigationComponent } from './children/dashboard/pages/administration-page/components/navigation/navigation.component';
import { MainNavigationComponent } from './children/dashboard/components/main-navigation/main-navigation.component';
import { InsideNavigationComponent } from './children/dashboard/pages/administration-page/pages/main-page/components/inside-navigation/inside-navigation.component';
import { UserToolsComponent } from './children/dashboard/pages/administration-page/pages/main-page/components/user-tools/user-tools.component';
import { UserAndSettingsPageComponent } from './children/dashboard/pages/user-and-settings-page/user-and-settings-page.component';
import { UsersPageComponent } from './children/dashboard/pages/users-page/users-page.component';
import { DefaultPageComponent } from './children/dashboard/pages/default-page/default-page.component';
import { AdressessAndPhonesPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/adressess-and-phones-page/adressess-and-phones-page.component';
import { CommentPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/comment-page/comment-page.component';
import { InsideMainPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/inside-main-page/inside-main-page.component';
import { SearchControlComponent } from './children/dashboard/components/left-navigation/components/search-control/search-control.component';
import { CustomSelectComponent } from './children/dashboard/components/custom-select/custom-select.component';
import { CustomCheckboxComponent } from './children/dashboard/components/custom-checkbox/custom-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    AdministrationPageComponent,
    MainPageComponent,
    AccessRightsPageComponent,
    StartingTheAplicationPageComponent,
    GroupsPageComponent,
    InteractionTabsComponent,
    InteractionsPageComponent,
    MyNotesPageComponent,
    SettingsPageComponent,
    TasksPageComponent,
    NavigationComponent,
    MainNavigationComponent,
    InsideNavigationComponent,
    UserToolsComponent,
    UserAndSettingsPageComponent,
    UsersPageComponent,
    DefaultPageComponent,
    AdressessAndPhonesPageComponent,
    CommentPageComponent,
    InsideMainPageComponent,
    SearchControlComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
