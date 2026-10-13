/// <reference types="astro/client" />
interface Env {
  FILES: R2Bucket;
  ACCESS_CODE: string;
  FILE_RETENTION_DAYS?: string;
}
