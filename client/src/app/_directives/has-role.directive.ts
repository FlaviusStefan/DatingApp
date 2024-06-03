import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  user: User = {} as User;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>,
              private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        if (user) {
          this.user = user;
          this.user.roles = this.normalizeRoles(this.user.roles); // Normalize roles here
        }
      }
    });
  }

  ngOnInit(): void {
    const normalizedRoles = this.normalizeRoles(this.appHasRole); // Normalize required roles
    if (this.user.roles.some(r => normalizedRoles.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  private normalizeRoles(roles: string[]): string[] {
    return roles.map(role => role === 'Moderator' ? 'Admin' : role);
  }
}
