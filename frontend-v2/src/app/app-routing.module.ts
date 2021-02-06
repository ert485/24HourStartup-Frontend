import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRouteGuard } from "@shared/auth/auth-route-guard";
import { RolesComponent } from "app/roles/roles.component";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { DocumentComponent } from "./document/document.component";
import { HomeComponent } from "./home/home.component";
import { TenantsComponent } from "./tenants/tenants.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "home",
            component: HomeComponent,
            canActivate: [AppRouteGuard],
          },
          { path: "document/:documentId", component: DocumentComponent },
          {
            path: "users",
            component: UsersComponent,
            data: { permission: "Pages.Users" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "roles",
            component: RolesComponent,
            data: { permission: "Pages.Roles" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "tenants",
            component: TenantsComponent,
            data: { permission: "Pages.Tenants" },
            canActivate: [AppRouteGuard],
          },
          { path: "about", component: AboutComponent },
          { path: "update-password", component: ChangePasswordComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
