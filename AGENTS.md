<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep company, service, product, and founder content in a central data module so every public page stays consistent.
- Build shared public-site navigation and footer in the root route so all content pages use one accessible shell.
- Keep animated headline text in a reusable client-effect component with reserved layout space and reduced-motion handling so SSR, accessibility, and page geometry remain stable.
- Keep first-visit page loading state in the shared root shell so navigation behavior stays consistent across public routes.
