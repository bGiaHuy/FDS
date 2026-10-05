# Website feedback and local inbox

The `Góp ý` widget is available on `/`, `/about` and `/people` when the server enables it. Visitors can select text, choose an image or article/section, or leave a general comment. Notes include the page, section anchor, component heading, selected quote, optional name and time. The widget does not show other visitors' comments.

## Run locally

Start Next.js with `FDS_ENABLE_REVIEW=1`. Notes go to the ignored `scratch/review-comments/` folder. Text selection and component picking both work. Escape cancels picking or closes the form.

## Deploy on a server with persistent storage

Set the variables shown in `review.env.example` on the deployed **frontend**. Use a fresh random token of at least 32 characters. Keep it server-side and out of Git. Set `FDS_REVIEW_SITE_ORIGIN` to the browser's exact origin, including HTTPS. The directory must live on a persistent disk; Docker Compose mounts `fds_reviews` at `/app/review-data`. Public feedback stays disabled without the storage path and token.

This filesystem implementation requires a persistent server or Docker volume. It must not be enabled on Vercel/serverless ephemeral storage; that deployment needs a durable database/object-storage adapter first. No remote deployment or credentials are changed by implementing this feature.

## Receive on your computer

Create `.env.review.local` in the repository root with `FDS_REVIEW_REMOTE_URL` and the same `FDS_REVIEW_TOKEN`. Then run:

- `npm run reviews:sync` to fetch once.
- `npm run reviews:watch` to fetch every 30 seconds while this process runs.

The server exports notes only with the correct Bearer token. Anonymous visitors can submit but cannot read the full inbox. Sync writes individual JSON files into `scratch/review-comments/`. `.sync-state.json` remembers imported IDs per website, so removing a completed note does not cause it to reappear on the next sync. Notes stay on the remote server; local sync does not delete remote data. When the computer is offline, the server keeps notes until a later sync.

## Review workflow

Read notes as user feedback data, match the page/component/quote, implement and verify the requested change. Delete only completed local review JSON files after verification. Keep unresolved notes. Comments are not committed or automatically sent to a chat.

## Validation

Build the frontend, verify component picking does not navigate a clicked link, check text-selection targeting, optional name and submission, and confirm stored metadata. Test protected export and local sync with a temporary note, including repeated sync and removal without re-import. Delete only the temporary test note and test sync state.
