# Published FDS photographs

Only curated, web-ready photographs belong here. Original collections live in the local `frontend/asset/photos/fds/` archive; `frontend/asset/photos/catalog.json` indexes them.

- `community/`: learning together and community activities.
- `learning/`: learning and recruitment activities; each image is captioned according to its source event.
- `events/club-fair/`: Club Fair photographs.
- `events/prom/`: Prom stage, group and reception photographs.
- `events/teambuilding/`: Ba Vì teambuilding photographs.
- `events/club-day-2026/`: three images retrieved from the public FDS Club Day recap on 2026-10-05; each manifest entry includes the source post. Facebook served 590px versions, so these are not enlarged.
- `competitions/`: Huawei ICT Competition and Digital Race photographs.
- `people/`: original member introduction artwork, grouped by department. Display the full artwork with `object-fit: contain` to preserve names and context.
- `identity/`: shirts and visual identity.
- `provisional/`: existing provisional imagery, kept separate from authentic club photographs.

Use stable keys from `frontend/lib/fds-photos.ts` in page components. `manifest.json` records the sources and relative public paths. Do not duplicate images under `club-images` or add the entire original archive to the website.

The latest selection adds 20 WebP files, resized to a maximum of 1600px without enlarging smaller originals. Names and roles on `/people` are transcribed from the supplied member introduction artwork; roles belong to that publication rather than a verified current leadership roster.
