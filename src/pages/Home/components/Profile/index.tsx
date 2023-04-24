import { useCallback, useEffect, useState } from 'react';

import { api } from '../../../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { ExternalLink } from '../../../../components/ExternalLink';
import { Loading } from '../../../../components/Loading';

import { ProfileAvatar, ProfileContainer, ProfileDetails } from './styles';

interface IProfile {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<IProfile>();

  const loadProfile = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/users/${username}`);

      setProfile(response.data);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  if (isLoading) {
    return (
      <ProfileContainer>
        <Loading />
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      {profile && (
        <>
          <ProfileAvatar src={profile.avatar_url} />

          <ProfileDetails>
            <header>
              <h1>{profile.name}</h1>

              <ExternalLink
                to={profile.html_url}
                target="_blank"
                text="Github"
              />
            </header>

            <p>{profile.bio}</p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profile.login}
              </li>

              {profile.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profile.company}
                </li>
              )}

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
};

export { Profile };
