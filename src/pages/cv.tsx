import Layout from '@theme/Layout';
import { useEffect } from 'react';
import cvData from '../data/cv.json';
import styles from './cv.module.css';

type Entry = {
  title: string;
  organisation?: string;
  date?: string;
  location?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  entries?: Entry[];
  ratings?: {label: string; value: number}[];
  tags?: string[];
};

function CvEntry({entry}: {entry: Entry}) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryHeading}>
        <h3>{entry.title}</h3>
        {entry.organisation && <p className={styles.organisation}>{entry.organisation}</p>}
        {(entry.date || entry.location) && (
          <p className={styles.meta}>
            {entry.date && <span>{entry.date}</span>}
            {entry.location && <span>{entry.location}</span>}
          </p>
        )}
      </div>
      {entry.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {entry.bullets && (
        <ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      )}
    </div>
  );
}

function CvSection({section}: {section: Section}) {
  return (
    <section className={styles.section} aria-labelledby={section.id}>
      <h2 id={section.id}>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.entries?.map((entry) => <CvEntry key={entry.title} entry={entry} />)}
      {section.ratings && (
        <dl className={styles.ratings}>
          {section.ratings.map((rating) => (
            <div key={rating.label}>
              <dt>{rating.label}</dt>
              <dd aria-label={`${rating.value} out of 5`}>{rating.value} / 5</dd>
            </div>
          ))}
        </dl>
      )}
      {section.tags && (
        <ul className={styles.tags}>
          {section.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
    </section>
  );
}

export default function CvPage() {
  useEffect(() => {
    const root = document.documentElement;
    const updatePrintDate = () => {
      const now = new Date();
      // Update synchronously so both the button and browser print shortcut
      // capture today's local date, even if this page has been open overnight.
      const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      root.style.setProperty('--cv-print-date', JSON.stringify(date));
    };

    updatePrintDate();
    window.addEventListener('beforeprint', updatePrintDate);
    return () => {
      window.removeEventListener('beforeprint', updatePrintDate);
      root.style.removeProperty('--cv-print-date');
    };
  }, []);

  return (
    <Layout
      title="Curriculum Vitae"
      description={`${cvData.name} — ${cvData.headline}. Experience, education, projects and skills.`}
      wrapperClassName={styles.cvPage}>
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <div>
            <p className={styles.eyebrow}>Curriculum Vitae</p>
            <p id="cv-print-help" className={styles.printHelp}>
              Choose “Save as PDF”, then turn off “Headers and footers” under “More settings”
              to remove the browser’s title and URL. The CV adds its own date-only footer.
            </p>
          </div>
          <button
            type="button"
            className="button button--primary"
            aria-describedby="cv-print-help"
            onClick={() => window.print()}>
            Save as PDF
          </button>
        </div>

        <article className={styles.resume} aria-label="Curriculum Vitae">
          <header className={styles.header}>
            <h1>{cvData.name}</h1>
            <p className={styles.headline}>{cvData.headline}</p>
            <p className={styles.personal}>
              <span>{cvData.location}</span>
              <span>Nationality: {cvData.nationality}</span>
            </p>
            <ul className={styles.contacts} aria-label="Contact details">
              {cvData.contact.map((contact) => (
                <li key={contact.href}><a href={contact.href}>{contact.label}</a></li>
              ))}
            </ul>
          </header>

          <nav className={styles.sectionNav} aria-label="CV sections">
            {cvData.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.title}</a>
            ))}
          </nav>

          <div className={styles.content}>
            {cvData.sections.map((section) => <CvSection key={section.id} section={section} />)}
          </div>
        </article>
      </main>
    </Layout>
  );
}
