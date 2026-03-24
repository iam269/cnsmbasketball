# Security Policy

## Supported Versions

The following versions of CNSM Baschet are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. Email the security team directly at: security@cnsmbaschet.ro
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Any suggested fixes (optional)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Fix Timeline**: Depending on severity (see below)

### Severity Classification

| Severity | Response Time |
|----------|---------------|
| Critical | 24 hours      |
| High     | 7 days        |
| Medium   | 30 days       |
| Low      | 90 days       |

### What to Expect

- You will receive an acknowledgment within 48 hours
- We will keep you updated on the progress
- Once the vulnerability is fixed, we will:
  - Credit you in the security advisory (if desired)
  - Publish a security advisory on GitHub
  - Release a patch update

## Security Best Practices

When developing or using this application, follow these security guidelines:

### For Developers

- Keep dependencies updated (run `npm audit` regularly)
- Never commit sensitive information to the repository
- Use environment variables for API keys and secrets
- Follow the principle of least privilege

### For Users

- Use strong passwords
- Keep your browser updated
- Report suspicious activity immediately

## Third-Party Dependencies

This project uses the following security-focused libraries:

- [Zod](https://zod.dev/) - Schema validation
- [React Hook Form](https://react-hook-form.com/) - Secure form handling
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components

## Security Updates

Security updates will be published via:
- GitHub Security Advisories
- Release notes
- Email notification (for critical updates)

---

Thank you for helping keep CNSM Baschet secure!
