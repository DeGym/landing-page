import { useEffect, useState } from 'react';
import { useWeb3 } from './useWeb3';
import tokenABI from '@/contracts/TokenABI.json';

const TOKEN_ADDRESS = '0x...'; // Replace with your token's address

export const useTokenContract = () => {
    const { contractService } = useWeb3();
    const [balance, setBalance] = useState<string | null>(null);

    useEffect(() => {
        if (contractService) {
            contractService.initContract('Token', tokenABI, TOKEN_ADDRESS);
        }
    }, [contractService]);

    const getBalance = async (address: string) => {
        if (contractService) {
            try {
                const balance = await contractService.callMethod('Token', 'balanceOf', address);
                setBalance(balance);
                return balance;
            } catch (error) {
                console.error('Error fetching balance:', error);
                throw error;
            }
        }
    };

    const transfer = async (to: string, amount: string, from: string) => {
        if (contractService) {
            try {
                return await contractService.sendTransaction('Token', 'transfer', from, to, amount);
            } catch (error) {
                console.error('Error transferring tokens:', error);
                throw error;
            }
        }
    };

    return { balance, getBalance, transfer };
};