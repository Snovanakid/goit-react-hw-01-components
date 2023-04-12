import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({transactions}) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={styles.transactionHeader}>
                    <th className={styles.transactionHeaderItem}>Type</th>
                    <th className={styles.transactionHeaderItem}>Amount</th>
                    <th className={styles.transactionHeaderItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
                    )
                })}
            </tbody>    
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
};
<ul className={styles.friendsList}></ul>;