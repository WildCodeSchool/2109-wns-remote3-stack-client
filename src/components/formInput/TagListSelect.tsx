import { useQuery } from '@apollo/client';
import OneTag from '@components/tag/OnTag';
import React, { useState } from 'react';
import { GET_ALL_TAGS } from '../../API/queries/tagQueries';

interface IResponse {
  getAllTags: ITagList[];
}

function ProjectList(): JSX.Element {
  const [data, setData] = useState<ITagList[]>([]);
  const [dataTag, setData1Tag] = useState<ITagList[]>([]);
  // FETCH THE PROJECT LIST
  const { loading, error } = useQuery<IResponse>(GET_ALL_TAGS, {
    onCompleted: (d) => {
      setData(d.getAllTags);
    },
  });

  // REVERSE THE ARRAY THE RENDER THE YOUNGER ONE IN FIRST
  const reverseData = [...data].reverse();

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  const toto = () => {
    console.log('toto');
  };

  return (
    <div className="mt-2 flex flex-wrap px-3 lg:pr-6">
      {reverseData.map((item) => {
        return (
          <div
            tabIndex={0}
            key={item.id}
            role="button"
            onKeyPress={toto}
            onClick={() => setData1Tag([...dataTag, item])}
          >
            <OneTag item={item} />
          </div>
        );
      })}
      {data.length === 0 && (
        <p className="font-normal lg:py-2 py-2 text-purple">
          There is no projects for now
        </p>
      )}
    </div>
  );
}

export default ProjectList;
