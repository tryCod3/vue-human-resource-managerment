<template>
  <table class="profile">
    <tbody>
      <tr class="profile-box">
        <td class="profile-details">
          <span>Company Name:</span>
          <p>{{ form.company_name }}</p>
        </td>
        <td class="profile-details">
          <span>Address:</span>
          <p>{{ form.address }}</p>
        </td>
        <td class="profile-details">
          <span>Phone Number:</span>
          <p>{{ form.phone_number }}</p>
        </td>
        <td class="profile-details">
          <span>Tax Code:</span>
          <p>{{ form.tax_code }}</p>
        </td>
        <td class="profile-details">
          <span>Type Of Company:</span>
          <p>{{ form.type_company }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import { ICompanyState } from '../../module';

  const props = defineProps(['id']);

  const form = ref<ICompanyState>({
    company_name: '',
    address: '',
    phone_number: '',
    tax_code: '',
    type_company: '',
  });

  const fetchData = async (url: string) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        alert('Error: ' + error);
        return false;
      });
  };

  watchEffect(async () => {
    if (props.id && props.id > 0) {
      const url = `http://localhost:3000/company/${props.id}`;
      const res = await fetchData(url);
      if (res) form.value = res;
    }
  });
</script>
<style lang="scss" scoped>
  .profile {
    width: 100%;

    .profile-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .profile-details {
        width: 100%;
        display: flex;
        align-items: center;

        span {
          padding-top: 1px;
          font-weight: bold;
          font-size: 19px;
          flex: 1;
        }

        p {
          justify-items: end;
          flex: 1;
        }
      }
    }
  }
</style>
