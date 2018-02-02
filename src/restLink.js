import { RestLink } from 'apollo-link-rest';
import camelcase from 'camelcase';
import pascalcase from 'pascalcase'

// The typePatcher is needed to add a __typename to the ApplicationList field in Apps, see 
// * https://github.com/apollographql/apollo-link-rest/commit/0b67ac22eafec2fa14ec3e4531172194bd30511f#diff-f901259277ba5c8432f713c98af5a1baR310
// * https://github.com/apollographql/apollo-link-rest/issues/48
const patchIfExists = ( data, key, __typename, patcher) => {
  const value = data[key];
  if (value == null) {
    return {};
  }
  const result = { [key]: patcher(value, __typename, patcher) };
  return result;
}

const typePatcher = {
  Apps: (obj, outerType, patchDeeper) => {
    if (obj == null) return obj;

    return {
      ...obj,
      ...patchIfExists(obj, 'ApplicationList', 'ApplicationList', patchDeeper),
    };
  },
}

const restLink = new RestLink({
  uri: 'https://apps.exactonline.com/nl/nl-NL/V2',
  headers: {
    "X-Requested-With": "XMLHttpRequest" // the api will return a http status code 500 internal server error without this header
  },
  typePatcher
  // fieldNameNormalizer: camelcase,
  // fieldNameDenormalizer: pascalcase
});

export default restLink;