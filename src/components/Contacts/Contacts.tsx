import { contacts } from '../../data/content';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className="container">
        <h2 className="section-title">Contacts</h2>
        <ul className={`card ${styles.list}`}>
          {contacts.map((contact) => (
            <li key={contact.label} className={styles.item}>
              <span className={styles.label}>{contact.label}</span>
              <a
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
