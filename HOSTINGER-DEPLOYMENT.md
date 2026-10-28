# Hostinger PHP/HTML deployment

This is a browser-rendered React site compiled to static HTML, CSS and JavaScript. PHP/HTML hosting can serve it. No PHP rewrite, database, Node server or managed Web App slot is needed. You do need an active hosting plan with an available ordinary website slot; domain registration alone is not hosting.

## Branches
- `main`: all source, original artwork, logo sets, video, documentation and QA evidence.
- `hostinger`: compiled files ready to serve. Select this branch in hPanel, not main.
- GitHub Actions builds changes pushed to main and updates hostinger. Do not edit generated files on hostinger directly.

## Connect GitHub in hPanel
1. Websites → Create website → Custom PHP/HTML website (not Web App, Node.js or Static frontend web app).
2. Select the hosting plan and assign your purchased domain. Choose an empty site. If it is already a PHP/HTML site, open its Dashboard instead. Back up any existing site before replacing it.
3. Website Dashboard → Advanced → Git → Connect with GitHub.
4. Authorize Hostinger for PrajaktaAdlytica/LegalMatterOps.
5. Select repository LegalMatterOps, branch `hostinger`, deployment/root directory `public_html`.
6. Deploy. Enable automatic deployments if offered. If a future main build updates hostinger but the site does not redeploy automatically, use Redeploy in hPanel.
7. Confirm `public_html/index.html`, `public_html/.htaccess` and `public_html/assets/` exist directly in public_html. Do not nest them under dist/client or a repository folder.
8. Connect the domain using hPanel's domain connection flow. If it already uses Hostinger nameservers, assigning it is usually enough. If DNS is elsewhere, apply the exact records shown by your hosting dashboard at that DNS provider. Preserve existing email records. Allow propagation, potentially up to 24 hours.
9. Enable/verify SSL and HTTPS. Open the domain, then directly load and refresh `/products/matter-desk`, `/pricing`, `/request-audit` and `/demo`. The included .htaccess handles SPA routing.

## Upload alternative
Use the supplied LegalMatterOps-Hostinger-Upload.zip. Upload and extract its contents directly into the site's public_html folder using File Manager. Include the hidden .htaccess file. This has the same compiled files as the hostinger branch and does not require Git integration or a server-side build. Future source changes require rebuilding/re-uploading, or Git deployment.

## Updating
Edit main → push → check GitHub Actions → hostinger branch updates → Hostinger auto-deploys or click Redeploy. If Actions write permissions are restricted by your account/organization, allow this repository's workflow to write repository contents or publish the built files manually.

## Scope and status
The inquiry form is local-only: it does not send email or save leads. Sign-in, CRM, payments and production legal workflows are not connected. Hosting the site does not enable those features. This delivery pushes GitHub source and compiled files; it does not configure your Hostinger account or publish your domain.

## Official guides checked 2026-10-28
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
- https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/
- https://www.hostinger.com/support/how-to-upload-a-website-from-backups/
