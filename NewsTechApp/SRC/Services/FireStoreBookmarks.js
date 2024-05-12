import firestore from '@react-native-firebase/firestore';

const isBookmark = async (news, user) => {
    let isBookmarked = false;

    try {
        if (user) {
            let snapShot = await firestore()
            .collection('Bookmarks-News')
            .where('userId', '==', user.uid)
            .where('news', '==', news)
            .get()

            isBookmarked = snapShot.docs && snapShot.docs.length > 0;
        }
    } catch (error) {
        console.log("isBookmark Error: ", error.message);
    }

    return isBookmarked;
}

const makeBookmark = async (news, user) => {
    try {
        if (user) {
            let snapShot = await firestore()
                .collection('Bookmarks-News')
                .add({
                    userId: user.uid,
                    addedOn: new Date(),
                    news: news,
                });

            console.log('Added bookmark news');
        }
    } catch (error) {
        console.log('makeBookmark Error: ', error.message);
    }
};

const deleteBookmark = async (news, user) => {
    try {
        if (user) {
            let snapShot = await firestore()
                .collection('Bookmarks-News')
                .where('userId', '==', user.uid)
                .where('news', '==', news)
                .get();

            if (snapShot.docs && snapShot.docs.length > 0) {
                await firestore()
                    .collection('Bookmarks-News')
                    .doc(snapShot.docs[0].id)
                    .delete();
            }
        }
        console.log('Deleted bookmark news');
    } catch (error) {
        console.log('deleteBookmark Error: ', error.message);
    }
}

export {
    isBookmark,
    makeBookmark,
    deleteBookmark,
}