import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <div class="breadcrumbs text-sm">
        <ul>
          <li [routerLink]="['/']"><a>Home</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>
      <div>
        @for (post of posts; track post.attributes.slug) {
        <a
          [routerLink]="['/blog/', post.attributes.slug]"
          class="hover:underline"
        >
          <h2>- {{ post.attributes.title }}</h2>
        </a>
        }
      </div>
    </div>
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
