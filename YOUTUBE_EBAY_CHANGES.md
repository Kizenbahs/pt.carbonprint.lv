# Hero YouTube & eBay Button Changes

This document explains the UI changes made to:

- The **Hero** section YouTube video
- The **eBay** button in the navigation bar

You can reuse these instructions in another IDE or project.

---

## 1. Hero Section – YouTube Video

### What Changed

- The Hero component now embeds this YouTube video:
  - **URL**: `https://www.youtube.com/watch?v=NO9clg6l_M8`
  - **ID**: `NO9clg6l_M8`

### Files Touched

- `src/pages/Index.tsx`
- `src/components/Hero.tsx`

### Implementation Details

#### In `src/pages/Index.tsx`

- The `Hero` component is used like this:

```tsx
<Hero 
  badge="🏆 Laipni lūdzam 3D drukas pasaulē"
  heading="We make AI physical"
  description="Izturīga oglekļa neilona druka un pielāgoti 3D dizaina pakalpojumi profesionāļiem, entuziastiem un uzņēmumiem"
  buttons={{
    primary: {
      text: "Sazinies ar mums",
      url: "#contact",
    },
    secondary: {
      text: "Kāpēc mēs",
      url: "#faq",
    },
  }}
  video={{
    youtubeId: "NO9clg6l_M8",
    title: "YouTube video player",
  }}
  primaryButtonClassName="bg-[#f3b112] hover:bg-[#e0a20f] text-black border-none"
/>
```

- The `video.youtubeId` is set to `NO9clg6l_M8`, which plugs into the iframe embed URL.

#### In `src/components/Hero.tsx`

- The `Hero` props include an optional `video` object:

```tsx
interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: { text: string; url: string };
    secondary?: { text: string; url: string };
  };
  video?: {
    youtubeId: string;
    title: string;
  };
  primaryButtonClassName?: string;
}
```

- Default `video` value now uses the same YouTube ID:

```tsx
const Hero = ({
  badge = "🏆 Laipni lūdzam 3D drukas pasaulē",
  heading = "We make AI physical",
  description = "Izturīga oglekļa neilona druka un pielāgoti 3D dizaina pakalpojumi profesionāļiem, entuziastiem un uzņēmumiem",
  buttons = {
    primary: { text: "Sazinies ar mums", url: "#" },
    secondary: { text: "Kāpēc mēs", url: "#" },
  },
  video = {
    youtubeId: "NO9clg6l_M8",
    title: "YouTube video player",
  },
  primaryButtonClassName,
}: Hero1Props) => {
  // ...
```

- The iframe uses that `youtubeId`:

```tsx
<iframe
  src={`https://www.youtube.com/embed/${video.youtubeId}`}
  title={video.title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="w-full h-full"
/>
```

### How to Reuse in Another Project

1. Add a `video` prop (with `youtubeId` and `title`) to your Hero component props.
2. Use that `youtubeId` inside an embedded iframe:
   - `https://www.youtube.com/embed/${video.youtubeId}`
3. In your page component (e.g. `Index.tsx`), pass the new `youtubeId`:
   - For the same video, use `NO9clg6l_M8`.

---

## 2. eBay Button – Color and URL

### What Changed

- The **eBay button** in the navigation bar now:
  - Uses **eBay blue**: `#0064D2`
  - Uses a darker hover color: `#0052AA`
  - Links to the **carbonprint.lv eBay profile**:
    - `https://www.ebay.com/usr/carbonprint.lv`

### File Touched

- `src/components/Navbar.tsx`

### Implementation Details

- The button is a simple anchor styled like a button:

```tsx
<a
  href="https://www.ebay.com/usr/carbonprint.lv"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0064D2] hover:bg-[#0052AA] text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
>
  Ebay
</a>
```

#### Notes

- `target="_blank"` opens eBay in a **new tab**.
- `rel="noopener noreferrer"` is important for **security and privacy** when using `target="_blank"`.
- The Tailwind classes define:
  - Background color
  - Hover background color
  - Text color
  - Padding
  - Border radius
  - Font size and weight
  - Smooth color transition on hover

### How to Reuse in Another Project

1. Place the anchor in your navbar or header component.
2. Make sure Tailwind (or equivalent CSS) is available:
   - If you’re not using Tailwind, convert the classes into plain CSS.
3. Update only:
   - `href` if your eBay profile/store URL is different.
   - Button label text if you want something like:
     - `eBay`
     - `Visit our eBay store`
     - `Shop on eBay`

#### Plain CSS Version (If Not Using Tailwind)

```html
<a
  href="https://www.ebay.com/usr/carbonprint.lv"
  target="_blank"
  rel="noopener noreferrer"
  class="ebay-button"
>
  Ebay
</a>
```

```css
.ebay-button {
  background-color: #0064d2;
  color: #ffffff;
  padding: 0.375rem 0.75rem; /* ~px-3 py-1.5 */
  border-radius: 0.375rem;  /* rounded-md */
  font-size: 0.875rem;      /* text-sm */
  font-weight: 500;         /* font-medium */
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.ebay-button:hover {
  background-color: #0052aa;
}
```

---

## 3. Summary Checklist for New IDE / Project

When you move these changes into another project:

- [ ] Add or update the **Hero** component to accept a `video.youtubeId` prop.
- [ ] Set the YouTube ID to `NO9clg6l_M8` for the desired video.
- [ ] Embed the video using `https://www.youtube.com/embed/${video.youtubeId}`.
- [ ] Add an **eBay button** in your navbar:
  - [ ] Background `#0064D2`, hover `#0052AA`, text white.
  - [ ] Link: `https://www.ebay.com/usr/carbonprint.lv`.
  - [ ] Include `target="_blank"` and `rel="noopener noreferrer"`.

You can copy‑paste snippets from this file directly into your next IDE or project setup.

