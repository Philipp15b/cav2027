---
layout: page
title: Call for Workshops
permalink: /cfw/
topic: authors
share-description: Call for workshop proposals for CAV 2027 in Amsterdam.
cover-img: "/assets/img/hero/tulips.jpg"
---

<dl class="intro-facts" aria-label="CAV 2027 workshop facts">
  <div>
    <dt><i class="fa-solid fa-calendar-days" aria-hidden="true"></i> Workshops</dt>
    <dd>Monday, July 19 and Tuesday, July 20, 2027</dd>
  </div>
  <div>
    <dt><i class="fa-solid fa-calendar-check" aria-hidden="true"></i> Main Conference</dt>
    <dd>Wednesday, July 21 through Friday, July 23, 2027</dd>
  </div>
  <div>
    <dt><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Venue</dt>
    <dd><a href="{{ "/venue/" | relative_url }}">KIT</a>, formerly the {{ site.data.conference.venue.former_name }}, in <a href="{{ "/amsterdam/" | relative_url }}">Amsterdam</a></dd>
  </div>
</dl>

<div class="lead-copy">
  <p>We solicit proposals for high-quality workshops with a clear connection to <a href="{{ "/" | relative_url }}">CAV 2027</a>.</p>
  <p>Workshops provide a forum for subcommunities to discuss open challenges and recent results in greater depth, explore topics at the boundaries of the main event's interests, or otherwise bring together members within and beyond the CAV community.</p>
</div>

---

## Workshop Proposals

Proposals will be reviewed by the Workshop Chair, CAV 2027 Program Chairs, and members of the CAV Steering Committee; see the [organization page]({{ "/organization/" | relative_url }}) for the full list.

Proposals must consist of the following two parts:

### Part I: Technical Information

A short (approximately one page) justification of the proposed topic, its significance and relevance to CAV, and the particular benefits of the workshop to the verification community, as well as its connection to related workshops at CAV and beyond.

### Part II: Organizational Information

- Contact information of the workshop organizers
- Primary contact (Workshop Chair)
- Desired length of the workshop (one or two days)
- Estimated audience size, along with a brief justification.
- Proposed format and agenda (e.g., demo sessions, tutorials, etc.)
- Potential invited speakers
- Procedures for selecting papers and participants
- Plans for dissemination, if any (e.g., special issues of journals)
- Special technical or AV requirements
- Links to a preliminary website of the workshop and call for papers (if possible)
- Information on whether the workshop has been previously held

### Evaluation Criteria

Proposals will be evaluated on the following criteria:

- Potential to advance the state of the art in verification technologies
- Potential to break new ground and create bridges with other disciplines
- Relevance to CAV
- Degree of overlap with other proposed workshops
- Past successes of the workshop and association with previous CAV conferences
- Organizers' ability and experience to lead a successful workshop

---

## Information

### Organizers

Relevant for this call are the following people:

{% assign general_chairs = site.data.organizers.roles | where: "title", "General Chairs + PC Chairs" | first %}
{% assign workshop_chair = site.data.organizers.roles | where: "title", "Workshop Chair" | first %}
{% assign relevant_organizers = "" | split: "" | push: general_chairs | push: workshop_chair %}

{% include organizer-grid.html roles=relevant_organizers featured_title="General Chairs" heading_level=4 %}

See the [full organization]({{ "/organization/" | relative_url }}) for all CAV 2027 roles.

### In-Person Event

CAV 2027 workshops are planned as in-person events.

### Mentoring

The _Verification Mentoring Workshop_ will be hosted on July 20, 2027.

### Location

Workshop rooms are limited, and we expect to host 6 workshops per workshop day.
For venue and travel information, see the [Venue page]({{ "/venue/" | relative_url }}).

### Proceedings

Workshop organizers may decide whether to publish workshop proceedings.

### Registration Fees

Workshop participants, including organizers, must register via the [CAV main registration page]({{ "/registration/" | relative_url }}).
The registration rates for workshops will be set by the CAV organizers in consultation with the workshop organizers, following rate structures similar to those used in the past.
The workshop organizers are strongly encouraged to seek external funding and sponsorships to support invited speakers.

---

## Important Dates

All deadlines are AoE (Anywhere on Earth).

### Proposals

<table>
  <tbody>
    <tr>
      <td>Proposals due</td>
      <td><button class="deadline-date" type="button" data-local-deadline data-deadline-utc="2026-09-16T11:59:00Z" data-original-deadline="September 15, 2026 AoE"><time datetime="2026-09-16T11:59:00Z">September 15, 2026</time></button></td>
    </tr>
    <tr>
      <td>Notification of accepted proposals</td>
      <td>October 1, 2026</td>
    </tr>
  </tbody>
</table>

### Workshop Organization

Organizers of accepted workshops must adhere to the following deadlines:

<table>
  <tbody>
    <tr>
      <td>Webpage online</td>
      <td><button class="deadline-date" type="button" data-local-deadline data-deadline-utc="2026-11-02T11:59:00Z" data-original-deadline="November 1, 2026 AoE"><time datetime="2026-11-02T11:59:00Z">November 1, 2026</time></button></td>
    </tr>
    <tr>
      <td>Call for contributions</td>
      <td><button class="deadline-date" type="button" data-local-deadline data-deadline-utc="2027-01-02T11:59:00Z" data-original-deadline="January 1, 2027 AoE"><time datetime="2027-01-02T11:59:00Z">January 1, 2027</time></button></td>
    </tr>
    <tr>
      <td>Notifications for participants</td>
      <td>TBD, likely by May 15, 2027</td>
    </tr>
  </tbody>
</table>

### Conference

<table>
  <tbody>
    <tr>
      <td>Workshops</td>
      <td>Monday, July 19 &amp; Tuesday, July 20, 2027</td>
    </tr>
    <tr>
      <td>Main Conference</td>
      <td>Wednesday, July 21 - Friday, July 23, 2027</td>
    </tr>
  </tbody>
</table>

## Submission

Please submit proposals (one PDF) via email to the Workshop Chair, Sebastian Junges, with subject line `[CAV WORKSHOP]`, at <a href="mailto:sebastian.junges@ru.nl?subject=%5BCAV%20WORKSHOP%5D">sebastian.junges@ru.nl</a>.

## Contact

For inquiries, please contact Sebastian Junges at <a href="mailto:sebastian.junges@ru.nl">sebastian.junges@ru.nl</a>.
