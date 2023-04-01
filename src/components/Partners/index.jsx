import React from 'react';
import styles from './Partners.module.scss';
import partnerIcon from '../../assets/Partners/partner.png';

const partners = [
  { id: 1, icone: partnerIcon },
  { id: 2, icone: partnerIcon },
  { id: 3, icone: partnerIcon },
  { id: 4, icone: partnerIcon },
  { id: 5, icone: partnerIcon },
  { id: 6, icone: partnerIcon },
];

const Partners = () => {
  return (
    <div className={styles.root}>
      <div className={`${'wrapper'} ${styles.container}`}>
        <div>
          <p>Наші Партнери:</p>
          {partners.map((partner) => (
            <div key={partner.id}>
              <img src={partner.icone} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
