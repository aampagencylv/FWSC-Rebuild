FWSC action button: navy primary, gold accent for the single most important CTA, outlined secondary, ghost for tertiary, danger for destructive/emergency actions.

```jsx
<Button variant="primary" size="md" onClick={go}>Find a certified operator</Button>
<Button variant="accent">Report an incident</Button>
<Button variant="secondary">View advisories</Button>
```

- Sizes: sm (32px), md (40px), lg (48px). Sentence-case labels; never all-caps.
- Use `accent` (gold) at most once per view.
