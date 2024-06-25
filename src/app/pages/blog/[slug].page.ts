import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  template: `
    <div class="breadcrumbs text-sm">
      <ul>
        <li [routerLink]="['/']"><a>Home</a></li>
        <li [routerLink]="['/blog']"><a>Blog</a></li>

        @if($post(); as post){
        <li>
          {{ post.attributes.title }}
        </li>
        }
      </ul>
    </div>
    @if ($post(); as post) {
    <article class="flex flex-col">
      <img [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </article>
    }
  `,
  imports: [AsyncPipe, MarkdownComponent, RouterLink],
  selector: 'app-blog-post',
  standalone: true,
})
export default class HomeComponent {
  readonly $post = toSignal(
    injectContent<PostAttributes>({
      subdirectory: 'blog',
      param: 'slug',
    })
  );
}
