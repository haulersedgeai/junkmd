"use client";

import Script from "next/script";
import { SITE } from "@/lib/constants";

export function HcpLeadForm() {
  return (
    <>
      <iframe
        id="hcp-lead-iframe"
        src={SITE.leadFormUrl}
        title="Request a quote from JunkMD+"
        style={{ width: "100%", border: "none", minHeight: 600 }}
      />
      <Script src={SITE.leadFormScriptUrl} strategy="afterInteractive" />
    </>
  );
}
