import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Archive</h1>
    @for (post of posts; track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]">
        <h2 class="post__title">{{ post.attributes.title }}</h2>
        <p class="post__desc">{{ post.attributes.description }}</p>
      </a>
    }
  `,
  styles: [``],
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
