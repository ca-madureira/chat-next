import React from 'react';
import Messages from './Messages';
import ChatFooter from './ChatFooter';
import { useChatContext } from '@/context/chatContext';
import ChatHeader from './ChatHeader';
import { useAuth } from '@/context/authContext';

const Chat = () => {
  const { data, users } = useChatContext();
  const { currentUser } = useAuth();

  const isUserBlocked = users[currentUser.id]?.blockedUsers?.find(
    (u) => u === data.user.id
  );

  const IamBlocked = users[data.user.uid]?.blockedUsers?.find(
    (u) => u === currentUser.uid
  );

  return (
    <div className="flex flex-col p-5 grow">
      <ChatHeader />
      {data.chatId && (
        <>
          <Messages />
          {!isUserBlocked && !IamBlocked && <ChatFooter />}

          {isUserBlocked && (
            <div className="w-full text-center text-c3 py-5">
              Usuario bloqueado
            </div>
          )}

          {IamBlocked && (
            <div className="w-full text-center text-c3 py-5">
              {`${data.user.displayName} bloqueou você`}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chat;
