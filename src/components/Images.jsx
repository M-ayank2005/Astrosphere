import React from 'react'; 
import Image from 'next/image';

export default function Images() {
    return (
        <div className="card flex justify-content-center">
            <Image 
                src="https://images.unsplash.com/photo-1612323272388-34fe470bedad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9sb2d5fGVufDB8fDB8fHww" 
                alt="Astrology Image" 
                width={500}
                height={250} 
            />
        </div>
    );
}
