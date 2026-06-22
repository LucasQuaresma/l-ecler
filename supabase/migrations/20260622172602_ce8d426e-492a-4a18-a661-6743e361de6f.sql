
-- Replace permissive INSERT policies with validated ones on leads
DROP POLICY IF EXISTS "Public can insert leads" ON public.leads;
CREATE POLICY "Public can insert valid leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL
    AND length(btrim(name)) BETWEEN 1 AND 200
    AND whatsapp IS NOT NULL
    AND length(btrim(whatsapp)) BETWEEN 8 AND 30
    AND (source IS NULL OR length(source) <= 100)
  );

-- Replace permissive INSERT policy on cookie_consents
DROP POLICY IF EXISTS "Public can insert cookie consents" ON public.cookie_consents;
CREATE POLICY "Public can insert valid cookie consents"
  ON public.cookie_consents FOR INSERT
  TO anon, authenticated
  WITH CHECK (visitor_id IS NOT NULL);

-- Explicit deny-read policies (defense in depth) — block any client SELECT
CREATE POLICY "Deny all reads on leads"
  ON public.leads FOR SELECT
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny all reads on cookie_consents"
  ON public.cookie_consents FOR SELECT
  TO anon, authenticated
  USING (false);

-- Revoke any SELECT grants from public client roles; only service_role may read
REVOKE SELECT ON public.leads FROM anon, authenticated;
REVOKE SELECT ON public.cookie_consents FROM anon, authenticated;
GRANT ALL ON public.leads TO service_role;
GRANT ALL ON public.cookie_consents TO service_role;
