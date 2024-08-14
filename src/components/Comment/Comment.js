


import React, { useState } from 'react'
import CommentCard, { CommentData } from './CommentCard'

const rawData = [
    {
        "id": 1,
        "author": "user1",
        "content": "This is the first comment.",
        "timestamp": "2024-08-14T10:00:00Z",
        "replies": [
            {
                "id": 2,
                "author": "user2",
                "content": "This is a reply to the first comment.",
                "timestamp": "2024-08-14T10:05:00Z",
                "replies": [
                    {
                        "id": 3,
                        "author": "user3",
                        "content": "This is a nested reply.",
                        "timestamp": "2024-08-14T10:10:00Z",
                        "replies": [
                            {
                                "id": 4,
                                "author": "user4",
                                "content": "Further nested reply.",
                                "timestamp": "2024-08-14T10:15:00Z",
                                "replies": [
                                    {
                                        "id": 5,
                                        "author": "user5",
                                        "content": "Even deeper nested reply.",
                                        "timestamp": "2024-08-14T10:20:00Z",
                                        "replies": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 6,
                "author": "user6",
                "content": "Another reply to the first comment.",
                "timestamp": "2024-08-14T10:25:00Z",
                "replies": []
            }
        ]
    },
    {
        "id": 7,
        "author": "user7",
        "content": "This is another top-level comment.",
        "timestamp": "2024-08-14T11:00:00Z",
        "replies": [
            {
                "id": 8,
                "author": "user8",
                "content": "Reply to another top-level comment.",
                "timestamp": "2024-08-14T11:05:00Z",
                "replies": [
                    {
                        "id": 9,
                        "author": "user9",
                        "content": "Nested reply to another top-level comment.",
                        "timestamp": "2024-08-14T11:10:00Z",
                        "replies": [
                            {
                                "id": 10,
                                "author": "user10",
                                "content": "Further nested reply.",
                                "timestamp": "2024-08-14T11:15:00Z",
                                "replies": []
                            }
                        ]
                    },
                    {
                        "id": 11,
                        "author": "user11",
                        "content": "Another nested reply.",
                        "timestamp": "2024-08-14T11:20:00Z",
                        "replies": []
                    }
                ]
            }
        ]
    },
    {
        "id": 12,
        "author": "user12",
        "content": "Yet another top-level comment.",
        "timestamp": "2024-08-14T11:30:00Z",
        "replies": []
    },
    {
        "id": 13,
        "author": "user13",
        "content": "Top-level comment with multiple replies.",
        "timestamp": "2024-08-14T11:40:00Z",
        "replies": [
            {
                "id": 14,
                "author": "user14",
                "content": "First reply to the top-level comment.",
                "timestamp": "2024-08-14T11:45:00Z",
                "replies": []
            },
            {
                "id": 15,
                "author": "user15",
                "content": "Second reply to the top-level comment.",
                "timestamp": "2024-08-14T11:50:00Z",
                "replies": []
            },
            {
                "id": 16,
                "author": "user16",
                "content": "Third reply with nested comment.",
                "timestamp": "2024-08-14T11:55:00Z",
                "replies": [
                    {
                        "id": 17,
                        "author": "user17",
                        "content": "Nested reply to the third reply.",
                        "timestamp": "2024-08-14T12:00:00Z",
                        "replies": []
                    }
                ]
            }
        ]
    }
];




const Comment = () => {
    const [data,setData]=useState(rawData);
  return (
    <div>
        
    <CommentData data={data} />
    </div>
  )
}

export default Comment