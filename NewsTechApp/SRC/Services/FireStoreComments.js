import firestore from '@react-native-firebase/firestore';

const makeComment = async (news, user, comment) => {
  try {
    if (user) {
      const newsDocRef = firestore()
        .collection('news-comments')
        .where('news', '==', news);

      let commentsSubColl;

      const newsDocSnapshot = await newsDocRef.get();
      if (!newsDocSnapshot.empty) {
        // Get the first document from the QuerySnapshot
        const firstDoc = newsDocSnapshot.docs[0];
        commentsSubColl = firstDoc.ref.collection('comments');
        await firstDoc.ref.update({
          numberOfComments: firestore.FieldValue.increment(1),
        });
      } else {
        const newsDocRef = await firestore()
          .collection('news-comments')
          .add({
            news: news,
            numberOfComments: 1,
          });
        commentsSubColl = newsDocRef.collection('comments');
      }

      await commentsSubColl.add({
        addedOn: firestore.Timestamp.fromDate(new Date()),
        from: {
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        },
        message: comment,
      });

      console.log('Added comment');
    }
  } catch (error) {
    console.log('Create Comment Error:', error.message);
  }
};

const deleteComment = async (news, commentId) => {
  try {
    const newsDocRef = firestore()
      .collection('news-comments')
      .where('news', '==', news);

    const newsDocSnapshot = await newsDocRef.get();

    const firstDoc = newsDocSnapshot.docs[0];
    const commentsSubColl = firstDoc.ref.collection('comments');

    const commentToDelete = await commentsSubColl.doc(commentId).get();

    await commentToDelete.ref.delete();
    await firstDoc.ref.update({
      numberOfComments: firestore.FieldValue.increment(-1),
    });

    console.log('Deleted Comment');

  } catch (error) {
    console.log('Delete Comment Error:', error.message);
  }
};

const getCommentCount = async (news) => {
  try {
    const newsDocRef = firestore()
      .collection('news-comments')
      .where('news', '==', news);

    const newsDocSnapshot = await newsDocRef.get();
    if (!newsDocSnapshot.empty) {
      const firstDoc = newsDocSnapshot.docs[0];
      const numberOfComments = firstDoc.data().numberOfComments;
      return numberOfComments;
    }
    return 0;
  } catch (error) {
    console.log('Get Comment Count Error:', error.message);
    return 0;
  }
};

export {
  makeComment,
  deleteComment,
  getCommentCount,
}