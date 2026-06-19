# Images — how to add your own

This folder holds every photo on the site. To swap a placeholder for one of your
own vehicle repair photos:

1. Drop your image into the matching folder:

   | Folder           | Used for                                  |
   | ---------------- | ----------------------------------------- |
   | `hero/`          | Full-screen hero background               |
   | `gallery/`       | Masonry "Featured Gallery" grid           |
   | `before-after/`  | Before / After comparison slider          |
   | `projects/`      | About section + featured project photos   |

2. Open `lib/content.ts` and point the matching `src` at your file, e.g.
   `src: "/images/gallery/my-car.jpg"`. Update the `alt` text too (good for SEO).

Tips:
- Use JPG or WebP, ideally 1600px on the long edge for sharp, fast-loading photos.
- For Before & After, keep the two photos framed as similarly as possible.
- Anything you don't replace will keep showing the supplied placeholder.
