import React from 'react';

interface CardProps {
    content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ content }) => (
    <div className="carousel-card p-28 bg-slate-50 rounded-lg">
        {content}
    </div>
);

interface VerticalCarouselProps {
    items: React.ReactNode[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
    return (
        <div className="h-full w-full flex items-end justify-center overflow-scroll flex-col p-8 bg-red-400 gap-4">
            {items.map((item, index) => (

                <Card key={index} content={item} />
            ))}
        </div>
    );
};

export default VerticalCarousel;