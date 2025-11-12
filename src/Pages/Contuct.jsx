import { Mail, MapPin, Phone } from 'lucide-react';
import { MdOutgoingMail } from 'react-icons/md';

const Contuct = () => {
    return (
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-center'>Contuct Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                <div className='bg-gray-400 p-5 rounded-2xl flex flex-col justify-center items-center'>
                    <span className='mb-3'><Mail size={44} /></span>
                    <h2 className='text-2xl font-semibold'>Email: </h2>
                    <span className='text-lg mt-2'>easybill@gmail.com</span>
                    <span className='text-lg'>easybillpay@gmail.com</span>
                </div>
                <div className='bg-gray-400 p-5 rounded-2xl flex flex-col justify-center items-center'>
                    <span className='mb-3'><MapPin size={44} /></span>
                    <h2 className='text-2xl font-semibold'>Location: </h2>
                    <span className='text-lg mt-2'>Gulshan-2, Dhaka</span>
                    <span className='text-lg'>Dhanmondi 32, Dhaka</span>
                </div>
                <div className='bg-gray-400 p-5 rounded-2xl flex flex-col justify-center items-center'>
                    <span className='mb-3'><Phone size={44} /></span>
                    <h2 className='text-2xl font-semibold'>Phone: </h2>
                    <span className='text-lg mt-2'>01896139783</span>
                    <span className='text-lg'>01580985035</span>
                </div>
            </div>
        </div>
    );
};

export default Contuct;