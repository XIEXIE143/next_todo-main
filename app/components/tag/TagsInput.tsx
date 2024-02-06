// TagsInput.tsx
import React, { useState } from 'react';

interface TagsInputProps {
    onChangeTags: (tags: string[]) => void;
    autoCompleteTags: string[];
}

const TagsInput: React.FC<TagsInputProps> = ({ onChangeTags, autoCompleteTags }) => {
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const handleAddTag = () => {
        if (tag.trim() !== '') {
            setTags([...tags, tag.trim()]);
            setTag('');
            onChangeTags([...tags, tag.trim()]);
        }
    };

    const handleRemoveTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
        onChangeTags(newTags);
    };

    return (
        <div>
            <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
            />
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        {tag}
                        <button onClick={() => handleRemoveTag(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagsInput;
