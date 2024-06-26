import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationPageComponent } from './children/dashboard/pages/administration-page/administration-page.component';
import { MainPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/main-page.component';
import { AccessRightsPageComponent } from './children/dashboard/pages/administration-page/pages/access-rights-page/access-rights-page.component';
import { GroupsPageComponent } from './children/dashboard/pages/administration-page/pages/groups-page/groups-page.component';
import { InteractionTabsComponent } from './children/dashboard/pages/administration-page/pages/interaction-tabs/interaction-tabs.component';
import { InteractionsPageComponent } from './children/dashboard/pages/administration-page/pages/interactions-page/interactions-page.component';
import { MyNotesPageComponent } from './children/dashboard/pages/administration-page/pages/my-notes-page/my-notes-page.component';
import { SettingsPageComponent } from './children/dashboard/pages/administration-page/pages/settings-page/settings-page.component';
import { StartingTheAplicationPageComponent } from './children/dashboard/pages/administration-page/pages/starting-the-aplication-page/starting-the-aplication-page.component';
import { TasksPageComponent } from './children/dashboard/pages/administration-page/pages/tasks-page/tasks-page.component';
import { UserAndSettingsPageComponent } from './children/dashboard/pages/user-and-settings-page/user-and-settings-page.component';
import { UsersPageComponent } from './children/dashboard/pages/users-page/users-page.component';
import { DefaultPageComponent } from './children/dashboard/pages/default-page/default-page.component';
import { InsideMainPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/inside-main-page/inside-main-page.component';
import { AdressessAndPhonesPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/adressess-and-phones-page/adressess-and-phones-page.component';
import { CommentPageComponent } from './children/dashboard/pages/administration-page/pages/main-page/pages/comment-page/comment-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "administration",
    pathMatch: "full",
  },
  {
    path: "administration",
    component: AdministrationPageComponent,
    children: [
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full",
      },
      {
        path: "main",
        component: MainPageComponent,
        children: [
          {
            path: "",
            redirectTo: "insideMain",
            pathMatch: "full",
          },
          {
            path: "insideMain",
            component: InsideMainPageComponent,
          },
          {
            path: "adressessAndPhones",
            component: AdressessAndPhonesPageComponent,
          },
          {
            path: "comment",
            component: CommentPageComponent,
          }
        ]
      },
      {
        path: "access",
        component: AccessRightsPageComponent,
      },
      {
        path: "groups",
        component: GroupsPageComponent,
      },
      {
        path: "interactionTabs",
        component: InteractionTabsComponent,
      },
      {
        path: "interactions",
        component: InteractionsPageComponent,
      },
      {
        path: "myNotes",
        component: MyNotesPageComponent,
      },
      {
        path: "settings",
        component: SettingsPageComponent,
      },
      {
        path: "startingTheAplication",
        component: StartingTheAplicationPageComponent
      },
      {
        path: "tasks",
        component: TasksPageComponent,
      }
    ]
  },
  {
    path:"usersAndSettings",
    component: UserAndSettingsPageComponent,
  },
  {
    path:"users",
    component: UsersPageComponent,
  },
  {
    path:"default",
    component: DefaultPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
