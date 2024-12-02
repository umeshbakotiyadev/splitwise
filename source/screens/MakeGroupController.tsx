import React, { useCallback, useRef, useState } from 'react'
import { firendsListItemType, firendsListOBJType, StackProps, ToastType } from 'Types';
import { useThemeX } from 'hooks';
import { BottomSheetX, ButtonX, MasterView, PaidByUserItem, PressX, TextInputX, ViewX } from 'components';
import { TextInput } from 'react-native-gesture-handler';
import { bSpace } from 'utils';
import useAppStore from 'store';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { PLUSH_IC } from 'assets';
import { FlatList } from 'react-native';
import { _HEIGHT, compressTextFN, generateUniqueID, getRandomImgFN } from 'functions';

const MakeGroupController = ({ navigation, route }: StackProps<'MakeGroupScr'>) => {

    const { str, col, font } = useThemeX();
    const { firendsList, userData, setGroupList } = useAppStore();

    const [toast, setToast] = useState<ToastType>({});
    const [groupName, setGroupName] = useState("");
    const [selectedFriends, setSelectedFriends] = useState<firendsListOBJType>({});

    const emailRef = useRef<TextInput>(null);
    const bottomSheetRef = useRef<BottomSheet>(null);

    function makeGroupFN() {
        if (compressTextFN(groupName).length == 0) setToast({ show: true, msg: str.PLZ_ENTER_GROUP_NAME });
        else if (Object.values(selectedFriends).length == 0) setToast({ show: true, msg: str.SELECT_AT_LIST_ONE_FRIENDS });
        else {
            const ID = generateUniqueID();
            setGroupList({
                [ID]: {
                    id: ID, groupName, gImg: getRandomImgFN(),
                    groupFriends: { ...selectedFriends, [userData?.email ?? ""]: userData },
                }
            });
            navigation.goBack();
        }
    }

    const usersRenderItem = useCallback(({ index, item }: { item: firendsListItemType, index: number }) => {
        const isSelcted = item?.email ? !!selectedFriends[item?.email] : false;
        return (<PaidByUserItem
            {...item} isSelected={isSelcted}
            name={item?.name} onPress={() => {
                if (isSelcted) {
                    let obj = selectedFriends;
                    item?.email && delete obj[item?.email];
                    item?.email && setSelectedFriends({ ...obj });
                } else { item?.email && setSelectedFriends({ ...selectedFriends, [item?.email]: item }); }
            }}
        />)
    }, [bottomSheetRef, firendsList, selectedFriends]);

    const selectedUsersRenderItem = useCallback(({ index, item }: { item: firendsListItemType, index: number }) => {
        return (<PaidByUserItem
            {...item} isSelected={false}
            name={item?.name} onPress={() => {
            }}
        />)
    }, [bottomSheetRef, firendsList, selectedFriends]);

    return (
        <MasterView title={str.MAKE_GROUP} pV={bSpace / 2} fixed f={1}
            toast={toast} setToast={setToast}
            bSvg={<ViewX pH={bSpace} pV={bSpace / 2} >
                <ButtonX text={str.SUBMITE} onPress={makeGroupFN} />
            </ViewX>}
            modals={
                <BottomSheetX snapPoints={[_HEIGHT * .7]} bRef={bottomSheetRef} >
                    <FlatList
                        data={Object.values(firendsList).filter((item) => userData?.email !== item?.email).reverse()}
                        renderItem={usersRenderItem}
                        ItemSeparatorComponent={() => <ViewX h={5} />}
                        keyExtractor={(item, index) => index.toString()} />
                    <ButtonX
                        text={str.DONE} mSty={{ marginHorizontal: bSpace, marginVertical: bSpace / 2 }}
                        onPress={() => bottomSheetRef?.current?.close()} />
                </BottomSheetX>
            } >
            <TextInputX
                phNm={str.ENTER_GROUP_NAME}
                text={groupName}
                onChangeT={setGroupName}
                autoCapitalize='words'
                autoComplete='name'
                onSubEdit={() => emailRef.current?.focus()}
                style={{ marginBottom: 0 }}
                rKeyType='next' mH={bSpace / 2}
            />
            <ViewX aItem='center' pV={bSpace / 2} >
                <PressX onPress={() => { bottomSheetRef.current?.expand(); }}>
                    <PLUSH_IC color={col.PRIMARY} />
                </PressX>
            </ViewX>
            <FlatList
                data={Object.values(selectedFriends).reverse()}
                keyExtractor={(_, index) => index.toString()}
                ItemSeparatorComponent={() => <ViewX h={5} />}
                renderItem={selectedUsersRenderItem} />
        </MasterView>)
}

export default MakeGroupController