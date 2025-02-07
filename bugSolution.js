The solution involves restructuring the data to avoid querying nested fields and implementing proper indexes. Here's how:

1. **Data Restructuring:**  Instead of nesting the `author` object, include the `uid` directly within the main document.

2. **Efficient Query:** Now, the query can efficiently target `authorUid` which leads to faster execution.

```javascript
// Correct Data Structure
db.collection('posts').where('authorUid', '==', userId).get()
.then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
})
.catch(error => {
  console.error('Error querying documents: ', error);
});

// Also add an index in your Firebase console for the 'authorUid' field in the 'posts' collection.
```

By refactoring the data and using proper indexing, queries will significantly improve in performance.