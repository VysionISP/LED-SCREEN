# Luminous — Shopify theme for LED display businesses

A Shopify Online Store 2.0 theme for selling commercial LED screens: indoor
and outdoor video walls, rental panels, controllers and accessories. Built on
top of [Shopify Dawn](https://github.com/Shopify/dawn) (the same
battle-tested foundation used by thousands of stores) with:

- A dark, high-contrast "LED at night" color palette with an electric-cyan
  accent, instead of Dawn's default light theme.
- A homepage pre-built with sections aimed at display buyers: a spec
  highlight grid (pixel pitch, brightness, IP rating, custom sizing), a
  category grid, a featured-products grid, a "request a quote" call to
  action, and an FAQ.
- A **Tech specs** block on the product page that renders a clean spec
  table (pixel pitch, resolution, brightness, refresh rate, viewing angle,
  IP rating, power consumption, cabinet size, weight) from per-product
  metafields — each product can have its own values.
- A dedicated **Request a Quote** page and form for B2B/bulk enquiries
  (venue, environment, quantity, screen size, timeline), built on Shopify's
  native contact form so submissions land straight in your inbox — no app
  required.

Everything below the surface (cart, search, filtering, checkout, blocks,
accessibility, performance) is unchanged, standard Dawn — so all of the
existing Shopify documentation and Dawn tutorials still apply.

## Requirements

- A Shopify store (a free [development store](https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores)
  is enough to preview and test).
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) installed locally
  (`npm install -g @shopify/cli @shopify/theme`), which needs Node.js.

## Getting started

```sh
# Log in and start a local dev preview that hot-reloads as you edit
shopify theme dev --store your-store.myshopify.com

# Push the theme to your store as a new, unpublished theme
shopify theme push --unpublished --store your-store.myshopify.com
```

See [shopify.dev's theme docs](https://shopify.dev/docs/storefronts/themes/getting-started)
for the full CLI reference.

## Setup checklist

The theme works out of the box, but a few pieces of content live in
Shopify admin (not theme code) and need to be created once per store:

1. **Collections.** The homepage's "Shop by category" grid ships empty.
   Create these collections (or rename to match your catalog) and assign
   them to the grid's blocks in the theme editor:
   - Indoor LED Displays
   - Outdoor LED Displays
   - Rental & Event Panels
   - Accessories & Controllers
2. **Request a Quote page.** Go to **Online Store → Pages → Add page**,
   title it "Request a Quote" (so its URL becomes `/pages/request-a-quote`,
   which the header announcement bar, footer and homepage buttons already
   link to), and set **Theme template** to `page.quote-request` in the
   sidebar. Submissions are emailed to whoever receives orders under
   **Settings → Notifications**; extra fields like screen size and
   quantity are appended to that email automatically.
3. **Product tech specs.** Go to **Settings → Custom data → Products →
   Add definition** and create these metafield definitions (namespace and
   key must match exactly; use type "Single line text" unless noted):

   | Name | Namespace and key | Example value |
   | --- | --- | --- |
   | Pixel pitch | `custom.pixel_pitch` | P2.5 |
   | Resolution | `custom.resolution` | 1920 x 1080 |
   | Brightness | `custom.brightness` | 5,000 nits |
   | Refresh rate | `custom.refresh_rate` | 3840 Hz |
   | Viewing angle | `custom.viewing_angle` | 160° / 160° |
   | IP rating | `custom.ip_rating` | IP65 (front & rear) |
   | Power consumption | `custom.power_consumption` | 650W/m² max |
   | Cabinet size | `custom.cabinet_size` | 500 x 500 x 75 mm |
   | Weight | `custom.weight` | 9.5 kg/panel |

   Fill these in per product from the product's edit page. Any spec you
   leave blank is automatically hidden — you don't need to fill in all
   nine. The block itself (heading text, optional footnote) is edited from
   the theme editor on the product template.
4. **Navigation.** Add "Request a Quote" (and your new collections) to
   your main menu under **Online Store → Navigation**.
5. **Logo, favicon and socials.** Theme editor → **Theme settings → Logo**
   and **Social media**. Until you upload a logo, the header falls back to
   your store name as text.
6. **Footer contact email.** The footer's "Get in touch" block ships with
   a placeholder `sales@example.com` — update it in the theme editor
   (Footer section → Get in touch block).

## Customizing the look

Everything visual is editable from **Online Store → Themes → Customize**,
no code required:

- **Theme settings → Colors** — five color schemes (`scheme-1`…`scheme-5`)
  used throughout the site. `scheme-3`/`scheme-4` are the dark navy/black
  schemes used for the header, footer and hero; `scheme-5` is the violet
  accent used for the quote call-to-action and sale badges.
- **Theme settings → Typography** — defaults to Work Sans (bold headings,
  regular body). Swap either font from Shopify's font library.
- **Theme settings → Brand information** — the short blurb shown in the
  footer's "About" block.

## Project structure

Standard Dawn/Online Store 2.0 layout:

```
layout/       Theme wrapper (theme.liquid, password.liquid)
templates/    Page-type templates (JSON, section-based)
sections/     Reusable page sections, incl. quote-request-form.liquid
              and the tech_specs block added to main-product.liquid
snippets/     Small reusable Liquid partials, incl. product-tech-specs.liquid
assets/       CSS, JS and SVG icons
config/       Theme settings schema and default values
locales/      Translations
```

## Credits

Built on [Shopify Dawn](https://github.com/Shopify/dawn), used here under
its [theme license](LICENSE.md) (free to use for building Shopify themes).
