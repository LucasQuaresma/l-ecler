ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS email text;

DROP POLICY IF EXISTS "Public can insert valid leads" ON public.leads;
CREATE POLICY "Public can insert valid leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL
    AND length(btrim(name)) BETWEEN 1 AND 200
    AND whatsapp IS NOT NULL
    AND length(btrim(whatsapp)) BETWEEN 8 AND 30
    AND (source IS NULL OR length(source) <= 100)
    AND (email IS NULL OR (length(email) BETWEEN 3 AND 254 AND email LIKE '%_@_%.__%'))
  );