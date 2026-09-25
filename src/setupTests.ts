import "@testing-library/jest-dom/vitest"

const OriginalRequest = globalThis.Request

globalThis.Request = class Request extends OriginalRequest {
  constructor(input: RequestInfo | URL, init?: RequestInit) {
    if (typeof input === "string" && input.startsWith("/")) {
      const base =
        typeof window !== "undefined"
          ? window.location.origin
          : "http://localhost"
      input = `${base}${input}`
    }
    super(input, init)
  }
} as typeof Request
